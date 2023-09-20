import {fabric} from "fabric"
import {
    AvatarFit,
    AvatarPosType,
    AvatarStyle,
    AvatarTemplate,
    AvatarType,
    defaultAvatarTemplate,
    RO,
    XYWH
} from "../../src/core/model/avatar-model"
// @ts-ignore
import avatar from '../avatar.png'
import {IBaseFilter, IImageOptions, IPolylineOptions, IRectOptions, Point} from "fabric/fabric-impl"
import {registerFilter} from '../util/fabric-filter-binarization'
import {actionHandler, anchorWrapper, polygonPositionHandler, roundedCorners} from "../util/fabric-avatar-util";

registerFilter()

export const AVATAR_IMG = document.createElement('img')
AVATAR_IMG.src = avatar

export const defaultAvatarImageOption: IImageOptions = {
    stroke: 'black',
    strokeWidth: 0
}

export const defaultContainerRectOption: IRectOptions = {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 2,
    selectable: true,
    evented: true
}

export const defaultContainerPolygonOption: IPolylineOptions = {
    fill: '#FFF0F5',
    strokeWidth: 1,
    stroke: '#FFB6C1',
    objectCaching: false,
    transparentCorners: false,
    absolutePositioned: true,
    cornerStyle: 'circle',
    cornerColor: 'rgba(40,40,255,0.5)',
    hasBorders: false
}

export const defaultStrokeDashArray = [8, 4]

const defaultPoint = {x: 0, y: 0}
export const defaultPolygonPos = [
    defaultPoint, defaultPoint, defaultPoint, defaultPoint
]

export class AvatarEditor {
    protected template: AvatarTemplate = {
        ...defaultAvatarTemplate,
        type: AvatarType.TO
    }
    private canvas: fabric.Canvas
    protected readonly containerRect = new fabric.Rect(defaultContainerRectOption)
    protected readonly containerPolygon = new fabric.Polygon(
        defaultPolygonPos,
        defaultContainerPolygonOption
    )
    protected readonly avatarImage: fabric.Image = new fabric.Image(
        AVATAR_IMG,
        defaultAvatarImageOption
    )
    private readonly ROUND_CLIP_PATH: fabric.Rect = roundedCorners(this.avatarImage)

    protected zoomPos: XYWH[] = []
    protected deformPos: RO[] = []

    protected frameIndex: number = 0
    protected settingProxyObject
    private isRemoved = false

    constructor(canvas: fabric.Canvas) {
        this.canvas = canvas
        canvas.add(this.avatarImage, this.containerRect)

        this.avatarImage.selectable = false
        this.avatarImage.centeredRotation = true
        this.containerRect.centeredRotation = true

        // this.avatarImage.setPositionByOrigin(this.containerRect.getCenterPoint(), 'center', 'center')
        this.containerRect.on('scaling', () => this.update())
            .on('moving', () => this.update())
            .on('rotating', () => this.update())

        this.containerPolygon.on('moved', () => this.updatePos())
            .on('modified', () => this.updatePos())

        this.update()
    }

    update() {
        this.updateFit()
        this.updatePos()
        this.canvas.renderAll()
    }

    set fit(fit: AvatarFit) {
        this.template.fit = fit
        this.updateFit()
        this.canvas.renderAll()
    }

    protected updateFit() {
        const fit = this.template.fit
        switch (fit) {
            case AvatarFit.FILL:
                this.avatarImage.cropX = 0
                this.avatarImage.cropY = 0
                this.avatarImage.scaleX = this.containerRect.getScaledWidth() / this.avatarImage.width
                this.avatarImage.scaleY = this.containerRect.getScaledHeight() / this.avatarImage.height
                this.avatarImage.left = this.containerRect.left
                this.avatarImage.top = this.containerRect.top
                break
            case AvatarFit.CONTAIN: {
                this.avatarImage.cropX = 0
                this.avatarImage.cropY = 0
                this.avatarImage.strokeWidth = 1

                const w = this.containerRect.getScaledWidth()
                const h = this.containerRect.getScaledHeight()
                const scale = Math.min(w / this.avatarImage.width, h / this.avatarImage.height)
                const scaledWidth = this.avatarImage.width * scale
                const scaledHeight = this.avatarImage.height * scale

                const angleRad = fabric.util.degreesToRadians(this.containerRect.angle);
                const rotatedOffsetX = (w - scaledWidth) / 2
                const rotatedOffsetY = (h - scaledHeight) / 2

                const rotatedX = rotatedOffsetX * Math.cos(angleRad) - rotatedOffsetY * Math.sin(angleRad);
                const rotatedY = rotatedOffsetX * Math.sin(angleRad) + rotatedOffsetY * Math.cos(angleRad);

                this.avatarImage.left = this.containerRect.left + rotatedX
                this.avatarImage.top = this.containerRect.top + rotatedY
                this.avatarImage.scale(scale)
                break
            }
            case AvatarFit.COVER: {
                this.avatarImage.strokeWidth = 0

                const w = this.containerRect.getScaledWidth()
                const h = this.containerRect.getScaledHeight()
                const scale = Math.max(w / this.avatarImage.width, h / this.avatarImage.height)
                const scaledWidth = this.avatarImage.width * scale
                const scaledHeight = this.avatarImage.height * scale

                const offsetX = this.containerRect.left + (w - scaledWidth) / 2
                const offsetY = this.containerRect.top + (h - scaledHeight) / 2
                this.avatarImage.left = offsetX
                this.avatarImage.top = offsetY

                const xp = (scaledWidth - w) / scale
                const yp = (scaledHeight - h) / scale
                this.avatarImage.cropX = xp
                this.avatarImage.cropY = yp
                this.avatarImage.left += xp * scale / 2
                this.avatarImage.top += yp * scale / 2

                this.avatarImage.scale(scale)
                break
            }
        }

        this.avatarImage.angle = this.containerRect.angle
    }

    protected updatePos() {
        switch (this.template.posType) {
            case AvatarPosType.ZOOM:
                const rect = this.containerRect
                this.zoomPos[this.frameIndex] = [
                    Math.round(rect.left),
                    Math.round(rect.top),
                    Math.round(rect.getScaledWidth()),
                    Math.round(rect.getScaledHeight())
                ]
                break
            case AvatarPosType.DEFORM:
                const polygon = this.containerPolygon

                // @ts-ignore
                const newPosArr: RO = []
                const x = Math.round(polygon.left)
                const y = Math.round(polygon.top)
                for (let i = 0; i < 4; i++) {
                    const absolutePoint = fabric.util.transformPoint(
                        {
                            x: (polygon.points[i].x - polygon.pathOffset.x),
                            y: (polygon.points[i].y - polygon.pathOffset.y)
                        } as Point,
                        polygon.calcTransformMatrix()
                    )
                    newPosArr[i] = [Math.round(absolutePoint.x - x), Math.round(absolutePoint.y - y)]
                }
                newPosArr[4] = [x, y]
                this.deformPos[this.frameIndex] = newPosArr
        }
    }

    set avatarOnTop(bool: boolean) {
        this.template.avatarOnTop = bool
        this.containerRect.strokeDashArray = bool ? null : defaultStrokeDashArray
        this.canvas.renderAll()
    }

    set round(bool: boolean) {
        this.template.round = bool
        this.avatarImage.set("clipPath", bool ? this.ROUND_CLIP_PATH : null)
        this.canvas.renderAll()
    }

    set angle(num: number) {
        this.template.angle = num
        this.containerRect.angle = num
        this.avatarImage.angle = num
        this.canvas.renderAll()
    }

    get angle(): number {
        switch (this.template.posType) {
            case AvatarPosType.ZOOM:
                return this.containerRect.angle
            case AvatarPosType.DEFORM:
                return 0
        }
    }

    set opacity(num: number) {
        this.template.opacity = num
        this.avatarImage.opacity = num
        this.canvas.renderAll()
    }

    set style(styles: AvatarStyle[]) {
        this.template.style = styles

        this.avatarImage.set('flipX', styles.includes(AvatarStyle.MIRROR))
        this.avatarImage.set('flipY', styles.includes(AvatarStyle.FLIP))

        const filters: IBaseFilter[] = []
        if (styles.includes(AvatarStyle.GRAY)) {
            filters.push(new fabric.Image.filters.Grayscale())
        }
        if (styles.includes(AvatarStyle.BINARIZATION)) {
            // @ts-ignore
            filters.push(new fabric.Image.filters.Binarization())
        }
        this.avatarImage.applyFilters(filters)

        this.canvas.renderAll()
    }

    set deform(bool: boolean) {
        this.template.posType = bool ? AvatarPosType.DEFORM : AvatarPosType.ZOOM
        const polygon = this.containerPolygon
        if (!bool) {
            this.canvas.remove(polygon)
            this.canvas.add(this.avatarImage, this.containerRect)
            this.canvas.renderAll()
            return
        }

        this.canvas.remove(this.avatarImage, this.containerRect)
        this.canvas.add(this.containerPolygon)

        const rect = this.containerRect
        this.containerPolygon.points = [{
            x: rect.left, y: rect.top
        }, {
            x: rect.left, y: rect.getScaledHeight() + rect.top
        }, {
            x: rect.getScaledWidth() + rect.left, y: rect.getScaledHeight() + rect.top
        }, {
            x: rect.getScaledWidth() + rect.left, y: rect.top
        }] as Point[]

        polygon.controls = polygon.points.reduce((acc, point, index) => {
            acc['p' + index] = new fabric.Control({
                positionHandler: polygonPositionHandler,
                actionHandler: anchorWrapper(index > 0 ? index - 1 : polygon.points.length - 1, actionHandler),
                actionName: 'modifyPolygon',
                //@ts-ignore
                pointIndex: index
            })
            return acc
        }, {})
        this.canvas.setActiveObject(polygon)
    }

    remove() {
        this.avatarImage.dispose()
        this.canvas.remove(this.avatarImage, this.containerRect, this.containerPolygon)
        this.canvas.renderAll()
        this.isRemoved = true
    }

    set index(num: number) {
        this.frameIndex = num

        this.toPos()
    }

    toPos() {
        switch (this.template.posType) {
            case AvatarPosType.ZOOM: {
                const pos = this.zoomPos[this.frameIndex]
                if (!pos) return
                if (!(pos[2] && pos[3])) {
                    this.containerRect.visible = false
                    this.avatarImage.visible = false
                    break
                } else {
                    this.containerRect.visible = true
                    this.avatarImage.visible = true
                }
                this.containerRect.left = pos[0]
                this.containerRect.top = pos[1]
                this.containerRect.width = pos[2]
                this.containerRect.height = pos[3]
                this.containerRect.scaleX = 1
                this.containerRect.scaleY = 1
                this.updateFit()
                // this.canvas.setActiveObject(this.containerRect)
                break
            }
            case AvatarPosType.DEFORM: {
                const pos = this.deformPos[this.frameIndex]
                if (!pos) return
                const polygon = this.containerPolygon
                polygon.visible = !!Math.max(...pos.flat(1))
                let i = 0
                polygon.left = pos[4][0]
                polygon.top = pos[4][1]
                for (let point of this.containerPolygon.points) {
                    point.x = pos[i][0]
                    point.y = pos[i][1]
                    i++
                }
                this.canvas.setActiveObject(polygon)
                break
            }
        }
        this.canvas.renderAll()
    }

    set hideInThisFrame(bool: boolean) {
        if (bool) {
            switch (this.template.posType) {
                case AvatarPosType.ZOOM:
                    this.zoomPos[this.frameIndex] = [0, 0, 0, 0]
                    break
                case AvatarPosType.DEFORM:
                    this.deformPos[this.frameIndex] = new Array(5).fill([0, 0]) as RO
                    break
            }
        } else {
            switch (this.template.posType) {
                case AvatarPosType.ZOOM:
                    this.zoomPos[this.frameIndex] = [0, 0, 100, 100]
                    break
                case AvatarPosType.DEFORM:
                    this.deformPos[this.frameIndex] = [
                        [0, 0], [0, 100], [100, 100], [100, 0], [0, 0]
                    ]
                    break
            }
        }
        this.toPos()
    }

    hideToggle() {
        const i = this.frameIndex
        this.hideInThisFrame = this.template.posType === AvatarPosType.ZOOM ?
            !!(this.zoomPos[i]?.[2] && this.zoomPos[i]?.[3]) : !!Math.max(...(this.deformPos[i] ?? [0]).flat(1))
    }

    get pos(): XYWH[] | RO[] | RO {
        switch (this.template.posType) {
            case AvatarPosType.ZOOM:
                return this.zoomPos
            case AvatarPosType.DEFORM:
                return this.deformPos.length === 1 ? this.deformPos[0] : this.deformPos
        }
    }

    set pos(p: XYWH[] | RO[] | RO) {
        if (this.template.posType === AvatarPosType.ZOOM) {
            this.zoomPos = p as XYWH[]
        } else {
            this.deformPos = p as RO[]
        }
    }

    get settingObject() {
        if (this.settingProxyObject) return this.settingProxyObject

        const that = this
        this.settingProxyObject = new Proxy({
            type: that.template.type,
            deform: that.template.posType === AvatarPosType.DEFORM,
            round: that.template.round,
            rotate: that.template.rotate,
            avatarOnTop: that.template.avatarOnTop,
            opacity: that.template.opacity,
            fit: that.template.fit,
            style: new Proxy({
                [AvatarStyle.FLIP]: false,
                [AvatarStyle.MIRROR]: false,
                [AvatarStyle.GRAY]: false,
                [AvatarStyle.BINARIZATION]: false
            }, {
                set(target, key, value) {
                    target[key] = value
                    // @ts-ignore
                    that.style = Object.keys(target).filter(k => target[k])
                    return true
                }
            }),
            hideToggle: () => this.hideToggle(),
            _delete: () => this.remove()
        }, {
            set: (target, key, value) => {
                if (key in that.template) that.template[key] = value
                target[key] = value
                that[key] = value
                return true
            }
        })
        return this.settingProxyObject
    }

    get settingAttributes() {
        return {
            type: {
                type: 'select',
                options: Object.values(AvatarType)
            },
            opacity: {
                type: 'range',
                min: 0,
                max: 1,
                step: 0.01
            },
            fit: {
                type: 'select',
                options: Object.values(AvatarFit)
            }
        }
    }

    get compiledTemplate(): AvatarTemplate | null {
        return this.isRemoved ? null : {...this.template, pos: this.pos, angle: this.angle}
    }
}
