import {getColor} from "../utils/utils"
import {ElementModel, TransformOrigin} from "./element-model";

const staticCanvas = document.createElement('canvas')
const staticCtx = staticCanvas.getContext('2d')
staticCtx.textBaseline = 'bottom'
staticCtx.textAlign = 'left'

export enum TextAlign {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    CENTER = 'CENTER'
}

export enum TextWrap {
    NONE = 'NONE',
    BREAK = 'BREAK',
    ZOOM = 'ZOOM'
}

export enum TextStyle {
    PLAIN = 'PLAIN',
    BOLD = 'BOLD',
    ITALIC = 'ITALIC'
}

export enum TextPosition {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    CENTER = 'CENTER'
}

export interface TextTemplate {
    text: string
    color?: string
    pos?: [number, number] | [number, number, number]
    angle: number
    origin?: TransformOrigin
    size?: number
    font?: string
    style?: TextStyle
    align?: TextAlign
    wrap?: TextWrap
    position?: [TextPosition, TextPosition]
    strokeColor?: string
    strokeSize?: number
}

export const defaultTextTemplate: TextTemplate = {
    text: 'default text',
    color: '#191919',
    pos: [50, 50],
    angle: 0,
    origin: TransformOrigin.DEFAULT,
    size: 16,
    font: 'arial',
    style: TextStyle.PLAIN,
    wrap: TextWrap.NONE,
    align: TextAlign.LEFT,
    position: [TextPosition.LEFT, TextPosition.TOP],
    strokeColor: '#ffffff',
    strokeSize: 0
}

export type DrawTextOption = [string, number, number]

export interface TextSettingOptions {
    x: number
    y: number
    text: string
    color: string
    size?: number
    font: string
    fontStyle: FontStyle
    strokeSize: number
    strokeColor: string
    hidden: boolean
    _delete: () => void
}

export type FontStyle = 'normal' | 'bold' | 'italic' | 'bold italic'


export class TextModel extends ElementModel{
    static readonly TEXT_VAR_REGEX = /\$txt\d+\[(.*?)]/g
    static readonly DEFAULT_MAX_WIDTH = 300
    static readonly DEFAULT_FONT_FAMILY = 'Arial'
    public static dpiScale = 1
        // ((window.devicePixelRatio || 1) * 96) / 72

    private readonly template: TextTemplate
    fontStyle?: FontStyle
    pixelSize: number
    private readonly defaultPixelSize: number
    width: number
    height: number
    backgroundSize: [number, number]
    private drawOptions: DrawTextOption[]
    private onChangeCallback: (TextModel) => any
    private disabled: boolean = false

    constructor(template: TextTemplate = defaultTextTemplate) {
        super()
        this.template = {...defaultTextTemplate, ...template}
        this.defaultPixelSize = template.size * TextModel.dpiScale
        this.pixelSize = this.defaultPixelSize
        this.template.color = getColor(this.template.color)
        this.style = this.template.style
        this.template.font = this.template?.font?.replace(' ', '-') || TextModel.DEFAULT_FONT_FAMILY
        this.template.text = this.template.text.replace(TextModel.TEXT_VAR_REGEX, (_, capturedText) => capturedText)
        this.setDrawOptions()
    }

    set size(size: number) {
        this.pixelSize = size * TextModel.dpiScale
        this.setDrawOptions()
    }

    setDrawOptions(): DrawTextOption[] {
        let {
            font,
            wrap
        } = this.template

        staticCtx.font = `${this.fontStyle} ${this.pixelSize}px ${font.replace(' ', '-')}`

        this.width = 0
        this.height = 0
        const lines = this.template.text.split('\n')
        const result: DrawTextOption[] = []
        let i = 0
        switch (wrap) {
            case TextWrap.NONE: {
                for (const line of lines) {
                    const [x, y, w, h] = this.getPosition(
                        staticCtx.measureText(line),
                        i++
                    )
                    this.width = Math.max(this.width, w)
                    this.height = h
                    result.push([line, x, y])
                }
                break
            }
            case TextWrap.BREAK: {
                const maxWidth = this.template.pos[2] || TextModel.DEFAULT_MAX_WIDTH
                let measure: TextMetrics
                let textWidth: number
                for (let line of lines) {
                    measure = staticCtx.measureText(line)
                    textWidth = measure.width
                    if (textWidth > maxWidth) {
                        let textLen: number
                        let textPixLen: number
                        let textToPrint: string
                        while (textWidth > maxWidth) {
                            textLen = 0
                            textPixLen = 0
                            textToPrint = ''
                            while (textPixLen < maxWidth) {
                                textLen++
                                textToPrint = line.substr(0, textLen)
                                textPixLen = staticCtx.measureText(line.substr(0, textLen)).width
                            }
                            textLen--
                            textToPrint = textToPrint.substr(0, textLen)
                            const backup = textLen
                            if (line.substr(textLen, 1) != ' ') {
                                while (line.substr(textLen, 1) != ' ' && textLen != 0) textLen--
                                if (textLen == 0) textLen = backup
                                textToPrint = line.substr(0, textLen)
                            }

                            line = line.substr(textLen)
                            const [x, y, w, h] = this.getPosition(
                                staticCtx.measureText(textToPrint),
                                i++
                            )
                            this.width = Math.max(this.width, w)
                            this.height = h
                            textWidth = w
                            result.push([textToPrint, x, y])
                        }
                    } else {
                        const [x, y, w, h] = this.getPosition(measure, i++)
                        this.width = Math.max(this.width, w)
                        this.height = h
                        result.push([line, x, y])
                    }
                }
                break
            }
            case TextWrap.ZOOM: {
                const maxWidth = this.template.pos[2] || TextModel.DEFAULT_MAX_WIDTH
                staticCtx.font = `${this.fontStyle} ${this.defaultPixelSize}px ${font}`
                let originWidth = Math.max(...lines.map(line => staticCtx.measureText(line).width))
                const scale = maxWidth / (originWidth || 1)
                const newSize = scale * this.defaultPixelSize
                this.pixelSize = newSize
                staticCtx.font = `${this.fontStyle} ${newSize}px ${font}`
                for (const line of lines) {
                    const [x, y, w, h] = this.getPosition(
                        staticCtx.measureText(line),
                        i++
                    )
                    this.width = Math.max(this.width, w)
                    this.height = h
                    result.push([line, x, y])
                }
                break
            }
        }
        this.drawOptions = result
        return result
    }

    private getPosition(measure: TextMetrics, lineIndex: number): [number, number, number, number] {
        const [x, y] = this.template.pos
        const width = measure.width
        const fontHeight = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent
        const heightOffset = fontHeight * lineIndex
        const totalHeight = fontHeight * (lineIndex + 1)
        switch (this.template.align) {
            case TextAlign.LEFT:
                return [x, y + heightOffset, width, totalHeight]
            case TextAlign.RIGHT:
                return [x - width, y + heightOffset, width, totalHeight]
            case TextAlign.CENTER:
                return [x - width / 2, y + heightOffset, width, totalHeight]
        }
    }

    get hidden() {
        return this.disabled
    }

    set hidden(bool: boolean) {
        this.disabled = bool
        this.onChangeCallback && this.onChangeCallback(this)
    }

    get size() {
        return this.template.size
    }

    set style(style: TextStyle) {
        // @ts-ignore
        this.fontStyle = style === TextStyle.PLAIN ? 'normal' : style.toLowerCase()
        this.template.style = style
    }

    get style(){
        return this.template.style
    }

    private rotateCtx(ctx: CanvasRenderingContext2D, drawOption: DrawTextOption) {
        let [_, x, y] = drawOption
        ctx.save()
        switch (this.template.origin) {
            case TransformOrigin.DEFAULT:
                ctx.translate(x, y)
                ctx.rotate(this.template.angle * Math.PI / 180.0)
                ctx.translate(-x, -y)
                break
            case TransformOrigin.CENTER:
                ctx.translate(x + this.width / 2, y + this.height / 2)
                ctx.rotate(this.template.angle * Math.PI / 180.0)
                ctx.translate(-x - this.width / 2, -y - this.height / 2)
                break
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        if (this.disabled) return
        let {
            angle,
            color,
            align,
            font,
            strokeColor,
            strokeSize
        } = this.template

        ctx.font = `${this.fontStyle} ${this.pixelSize}px ${font}`
        ctx.fillStyle = color
        ctx.textBaseline = align === TextAlign.CENTER ? 'middle' : 'bottom'

        for (let drawOption of this.drawOptions) {
            if (angle) this.rotateCtx(ctx, drawOption)
            ctx.fillText(...drawOption)
            if (angle) ctx.restore()
        }

        if (strokeColor && strokeSize) {
            ctx.strokeStyle = strokeColor
            ctx.lineWidth = strokeSize
            for (let drawOption of this.drawOptions) {
                if (angle) this.rotateCtx(ctx, drawOption)
                ctx.strokeText(...drawOption)
                if (angle) ctx.restore()
            }
        }
    }

    get settingObject(): TextSettingOptions {
        const that = this
        return new Proxy({
            get x() {
                return that.template.pos[0]
            },
            set x(x: number) {
                that.template.pos[0] = x
            },
            get y() {
                return that.template.pos[1]
            },
            set y(y: number) {
                that.template.pos[1] = y
            },
            text: that.template.text,
            color: that.template.color,
            get size() {
                return that.template.wrap === TextWrap.ZOOM ? undefined : that.pixelSize
            },
            set size(size: number) {
                that.pixelSize = size
            },
            font: that.template.font,
            set fontStyle(style) {
                that.fontStyle = style
            },
            get fontStyle() {
                return that.fontStyle
            },
            strokeSize: that.template.strokeSize,
            strokeColor: that.template.strokeColor,
            get hidden() {
                return that.disabled
            },
            set hidden(bool: boolean) {
                that.hidden = bool
            },
            _delete: () => that.hidden = true
        }, {
            set: (target, prop, value) => {
                target[prop] = value
                that.template[prop] = value
                if (that.disabled) return true
                this.setDrawOptions()
                that.onChangeCallback && that.onChangeCallback(this)
                return true
            }
        })
    }

    get settingAttributes() {
        const range = {
            type: 'range',
            min: 0,
            step: 1
        }
        return {
            x: {...range, max: this.backgroundSize ? this.backgroundSize[0] : 1000},
            y: {...range, max: this.backgroundSize ? this.backgroundSize[1] : 1000},
            size: {...range, max: 256},
            fontStyle: {
                type: 'select',
                options: [
                    'normal', 'bold', 'italic', 'bold italic'
                ]
            },
            strokeSize: {...range, max: 16},
            font: {type: 'font'}
        }
    }

    set onchange(callback: (TextModel) => any) {
        this.onChangeCallback = callback
    }
}


export class TextModelList {
    private readonly arr: TextModel[]
    private cacheCtx: CanvasRenderingContext2D
    readonly topAvatars: TextModel[] = []
    readonly bottomAvatars: TextModel[] = []
    protected sizeMap: { [key: string]: number } = Object.create(null)
    private needUpdate: boolean = false
    cacheCount: number = 0

    constructor(arr: TextModel[]) {
        this.arr = arr
        if (!arr?.length) return

        let i = 0
        for (const text of arr) {
            text.onchange = () => this.needUpdate = true
            this.sizeMap[`text${i}Width`] = text.width
            this.sizeMap[`text${i}Height`] = text.height
            i++
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (const text of this.arr) {
            text.draw(ctx)
        }
    }

    setCacheArea(width: number, height: number) {
        for (const text of this.arr) {
            text.backgroundSize = [width, height]
        }
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        this.cacheCtx = canvas.getContext('2d')
        this.drawCache()
    }

    private drawCache() {
        this.draw(this.cacheCtx)
    }

    updateCache() {
        this.cacheCtx.clearRect(0, 0, this.cacheCtx.canvas.width, this.cacheCtx.canvas.height)
        this.drawCache()
        this.needUpdate = false
        this.cacheCount++
    }

    get cacheCanvas() {
        if (this.needUpdate) this.updateCache()
        return this.cacheCtx.canvas
    }

    addTextModel() {
        const newText = new TextModel()
        this.arr.push(newText)
        this.needUpdate = true
        newText.onchange = () => this.needUpdate = true
        newText.backgroundSize = [this.cacheCtx.canvas.width, this.cacheCtx.canvas.height]
        return newText
    }

    get texts(): TextModel[] {
        return this.arr
    }

    static createFrom(objArr: TextTemplate[]): TextModelList {
        return new TextModelList(
            objArr.map(temp => new TextModel(temp))
        )
    }
}
