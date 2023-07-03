import {ElementModel} from './element-model';
import {assertArrayLength, getImageFromBlob} from "../utils/utils";
import {
    binarizeImage,
    clipCircleImage,
    cropImage,
    deformImage,
    flipImage,
    grayImage,
    mirrorImage,
    rotateImage
} from "../image-synthesis";
import {Expression, Parser} from "expr-eval";
import {decodeGif} from "../gif-synthesis/decoder";
import {decodeVideo} from "../video-synthesis/decoder";

export enum AvatarType {
    FROM = 'FROM',
    TO = 'TO',
    GROUP = 'GROUP',
    BOT = 'BOT',
    RANDOM = 'RANDOM'
}

export enum AvatarPosType {
    ZOOM = 'ZOOM',
    DEFORM = 'DEFORM'
}

export enum AvatarCropType {
    NONE = 'NONE',
    PIXEL = 'PIXEL',
    PERCENT = 'PERCENT'
}

export enum AvatarFit {
    CONTAIN = 'CONTAIN',
    COVER = 'COVER',
    FILL = 'FILL'
}

export enum AvatarStyle {
    MIRROR = 'MIRROR',
    FLIP = 'FLIP',
    GRAY = 'GRAY',
    BINARIZATION = 'BINARIZATION'
}

export interface AvatarTemplate {
    type: AvatarType

    pos: any[]
    posType?: AvatarPosType

    crop?: [number, number] | [number, number, number, number]
    cropType?: AvatarCropType

    style?: AvatarStyle[]

    round?: boolean
    rotate?: boolean
    avatarOnTop?: boolean
    antialias?: boolean
    resampling?: boolean

    angle?: number
    opacity?: number
}

const defaultTemplate: AvatarTemplate = {
    type: undefined,

    pos: undefined,
    posType: AvatarPosType.ZOOM,

    crop: null,
    cropType: AvatarCropType.NONE,

    style: [],

    round: false,
    rotate: false,
    avatarOnTop: true,
    antialias: true,
    resampling: false,

    angle: 0,
    opacity: 1
}

export interface CompiledAvatarTemplate extends AvatarTemplate {
    pos: number[][] | Expression[][]
    compiled: boolean
}

export function compileAvatarTemplate(template: AvatarTemplate): CompiledAvatarTemplate {
    // @ts-ignore return if compiled
    if (template.compiled) return template

    const t: AvatarTemplate = {...defaultTemplate, ...template}
    const originPos = t.pos
    let targetPos
    switch (t.posType) {
        case AvatarPosType.ZOOM:
            targetPos = typeof originPos[0] !== 'object' ?
                [assertArrayLength(originPos, 4)] : originPos.map(e => assertArrayLength(e, 4))

            t.pos = targetPos.map(e =>
                e.map(ele => typeof ele === 'number' ? ele : Parser.parse(ele as string))
            )
            break
        case AvatarPosType.DEFORM:
            targetPos = originPos.map(ele => assertArrayLength(ele, 5).map(e => assertArrayLength(e, 2)))

            t.pos = targetPos.map(e =>
                e.map(ele => ele.map(el => typeof el === 'number' ? el : Parser.parse(el as string)))
            )
            break
    }

    // @ts-ignore
    t.compiled = true
    return t as CompiledAvatarTemplate
}

export interface AvatarData {
    // from: string | URL
    // to: string | URL
    // group: string | URL
    // bot: string | URL
    // random: (string | URL)[]
    from?: Blob
    to?: Blob
    group?: Blob
    bot?: Blob
    random?: Blob[]
}

type P = [number, number]
type RO = [P, P, P, P, P]
type XYWH = [number, number, number, number]

export class AvatarModel extends ElementModel {
    public readonly type: AvatarType
    protected template: CompiledAvatarTemplate
    protected originBlob: Blob
    protected frames: HTMLCanvasElement[] | HTMLImageElement[]
    private pos: XYWH[] | RO[]
    private readonly initPromise: Promise<void>

    constructor(template: AvatarTemplate, data: AvatarData) {
        super()
        this.template = compileAvatarTemplate(template)
        this.type = template.type
        this.originBlob = data[this.type.toString().toLowerCase()]
        if (!this.originBlob) throw new Error(`no ${this.type} image`)

        this.initPromise = this.init()
    }

    protected async init() {
        await this.loadFile()
        await this.setCrop()
        await this.setStyle()
        await this.setRound()
        await this.setPos()
    }

    protected async loadFile() {
        const blob = this.originBlob
        if (blob.type.startsWith('video/')) {
            this.frames = await decodeVideo(blob, this.template.pos.length)
        } else if (!blob.type.startsWith('image')) {
            throw new Error("不支持的格式: " + blob.type)
        }

        if (blob.type === 'image/gif') {
            this.frames = await decodeGif(blob)
        } else {
            this.frames = [await getImageFromBlob(blob)]
        }
    }

    protected setCrop(): void {
        const cropType = this.template.cropType
        if (cropType === AvatarCropType.NONE) return
        this.frames = this.frames.map(frame =>
            cropImage(frame, this.template.crop, cropType === AvatarCropType.PERCENT)
        )
    }

    protected setStyle(): void {
        for (const style of this.template.style) {
            console.log(style, 1)
            switch (style) {
                case AvatarStyle.FLIP:
                    this.frames = this.frames.map(flipImage)
                    break
                case AvatarStyle.MIRROR:
                    this.frames = this.frames.map(mirrorImage)
                    break
                case AvatarStyle.GRAY:
                    this.frames = this.frames.map(grayImage)
                    break
                case AvatarStyle.BINARIZATION:
                    this.frames = this.frames.map(binarizeImage)
                    break
                default:
                    throw new Error('unknown style ' + style)
            }
        }
    }

    protected setRound() {
        if (this.template.round) this.frames = this.frames.map(clipCircleImage)
    }

    protected async setPos() {
        switch (this.template.posType) {
            case AvatarPosType.ZOOM:
                this.pos = this.template.pos.map(ele => ele.map(this.evalExpression))
                break
            case AvatarPosType.DEFORM:
                this.pos = this.template.pos.map(ele => ele.map(e => e.map(this.evalExpression)))
                break
        }
    }

    protected evalExpression(e: number | Expression): number {
        return typeof e === 'number' ? e : e.evaluate({
            height: this.frames[0].height,
            width: this.frames[0].width
        }) as number
    }

    protected getFrame(index: number): HTMLCanvasElement {
        return (index < this.frames.length ? this.frames[index] : this.frames.at(-1)) as HTMLCanvasElement
    }

    protected getPos(index: number): RO | XYWH {
        return index < this.pos.length ? this.pos[index] : this.pos.at(-1)
    }

    async getLength(): Promise<{ posLength: number, frameLength: number }> {
        await this.initPromise
        return {posLength: this.pos.length, frameLength: this.frames.length}
    }

    async draw(ctx: CanvasRenderingContext2D, frameIndex: number = 0) {
        await this.initPromise
        let frame = this.getFrame(frameIndex)
        const pos = this.getPos(frameIndex)
        let {angle, opacity, rotate} = this.template
        ctx.globalAlpha = opacity
        if (rotate) angle += (360 / pos.length) * frameIndex
        switch (this.template.posType) {
            case AvatarPosType.ZOOM:
                if (angle) frame = rotateImage(frame, angle)
                ctx.drawImage(frame, ...pos as XYWH)
                break
            case AvatarPosType.DEFORM:
                const tempCanvas = document.createElement('canvas')
                tempCanvas.width = ctx.canvas.width
                tempCanvas.height = ctx.canvas.height
                await deformImage(tempCanvas, frame, pos as RO)
                ctx.drawImage(tempCanvas, 0, 0)
                break
        }
        ctx.globalAlpha = 1
    }

    get onTop() {
        return this.template.avatarOnTop
    }

    async getSize() {
        await this.initPromise
        const frame = this.frames[0]
        return {width: frame.width, height: frame.height}
    }
}

export class AvatarModelList {
    private readonly arr: AvatarModel[]
    private readonly initPromise: Promise<void[]>
    readonly topAvatars: AvatarModel[] = []
    readonly bottomAvatars: AvatarModel[] = []
    protected sizeMap: { [key: string]: number } = Object.create(null)
    private maxLength: { posLength: number, frameLength: number }

    constructor(arr: AvatarModel[]) {
        this.arr = arr
        this.initPromise = this.init()
    }

    protected async init() {
        return Promise.all(this.arr.map(async (avatar, i) => {
            if (avatar.onTop) {
                this.topAvatars.push(avatar)
            } else {
                this.bottomAvatars.push(avatar)
            }

            const size = await avatar.getSize()
            this.sizeMap[`avatar${i}Width`] = size.width
            this.sizeMap[`avatar${i}Height`] = size.height

            this.maxLength = await avatar.getLength()
        }))
    }

    async getSizeMap() {
        await this.initPromise
        return this.sizeMap
    }

    async getMaxLength() {
        await this.initPromise
        return this.maxLength
    }

    static createFrom(objArr: AvatarTemplate[], data: AvatarData): AvatarModelList {
        return new AvatarModelList(
            objArr.map(temp => new AvatarModel(temp, data))
        )
    }
}