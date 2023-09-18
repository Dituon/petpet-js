import {TextAlign, TextModel, TextSettingOptions, TextStyle, TextTemplate, TextWrap} from "../../src/core"
import {fabric} from "fabric"
import {ITextboxOptions, ITextOptions} from "fabric/fabric-impl"

export const defaultTextOption: ITextOptions | ITextboxOptions = {
    fill: '#191919',
    fontSize: 56,
    stroke: '#ffffff',
    strokeWidth: 1,
    splitByGrapheme: true,
    textAlign: 'left'
}

const baseControlsVisibility = {
    mb: false,
    mt: false,
    mtr: false
}

export class TextEditor {
    readonly canvas: fabric.Canvas
    itext: fabric.IText
    textBox: fabric.Textbox
    #align: TextAlign = TextAlign.LEFT
    #wrap: TextWrap = TextWrap.NONE
    #style: TextStyle = TextStyle.PLAIN
    #prevWidth: number
    private isRemoved = false

    constructor(canvas: fabric.Canvas, text = 'Petpet!') {
        this.canvas = canvas
        this.itext = new fabric.IText(text, defaultTextOption)
        this.textBox = new fabric.Textbox(text, defaultTextOption)
        this.itext.setControlsVisibility({
            ...baseControlsVisibility,
            ml: false,
            mr: false
        })
        this.textBox.setControlsVisibility(baseControlsVisibility)
        canvas.add(this.text)

        this.textBox.on('changed', () => this.updateWidth())
            .on('resizing', () => this.updateWidth())
    }

    get text(): fabric.IText | fabric.Textbox {
        return this.#wrap === TextWrap.NONE ? this.itext : this.textBox
    }

    updateWidth() {
        if (this.#wrap !== TextWrap.ZOOM) return
        copyTextOption(this.textBox, this.itext)
        this.textBox.fontSize *= this.textBox.width / this.itext.width - 0.02
        this.#prevWidth = this.textBox.width
    }

    set pos(pos: [number, number] | [number, number, number]) {
        let [x, y] = pos
        switch (this.#align) {
            case TextAlign.RIGHT:
                x -= this.text.getScaledWidth()
                break
            case TextAlign.CENTER:
                x -= this.text.getScaledWidth() / 2
                y -= this.text.getScaledHeight() / 2
                break
        }
        this.text.left = x
        this.text.top = y
        this.canvas.renderAll()
    }

    get pos(): [number, number] | [number, number, number] {
        let x = Math.round(this.text.left)
        let y = Math.round(this.text.top + this.text.height)
        switch (this.#align) {
            case TextAlign.RIGHT:
                x += Math.round(this.text.getScaledWidth())
                break
            case TextAlign.CENTER:
                x += Math.round(this.text.getScaledWidth() / 2)
                y += Math.round(this.text.getScaledHeight() / 2)
                break
        }
        return this.wrap === TextWrap.NONE ? [x, y] : [x, y, this.textBox.width]
    }

    set style(style: TextStyle) {
        let bold = style === TextStyle.BOLD
        let italic = style === TextStyle.ITALIC
        this.text.set({
            fontWeight: bold ? 'bold' : 'normal',
            fontStyle: italic ? 'italic' : ''
        })
        this.#style = style
        this.canvas.renderAll()
    }

    get style(): TextStyle {
        return this.#style
    }

    set align(align: TextAlign) {
        this.text.textAlign = align.toLowerCase()
        this.canvas.renderAll()
    }

    get align(): TextAlign {
        //@ts-ignore
        return this.text.textAlign.toUpperCase()
    }

    set wrap(wrap: TextWrap) {
        switch (wrap) {
            case TextWrap.NONE:
                copyTextOption(this.textBox, this.itext)
                this.canvas.remove(this.textBox)
                this.canvas.add(this.itext)
                break
            case TextWrap.BREAK:
            case TextWrap.ZOOM:
                if (this.#wrap === TextWrap.ZOOM || this.#wrap === TextWrap.BREAK) break
                this.#prevWidth = this.itext.width
                copyTextOption(this.itext, this.textBox)
                this.canvas.remove(this.itext)
                this.canvas.add(this.textBox)
                break
        }
        this.#wrap = wrap
        this.updateWidth()
        this.canvas.renderAll()
    }

    get wrap(): TextWrap {
        return this.#wrap
    }

    set size(size: number) {
        this.text.set({
            fontSize: TextEditor.toPixelSize(size),
            scaleX: 1,
            scaleY: 1
        })
        this.canvas.renderAll()
    }

    get size(): number {
        return TextEditor.toPointsSize(this.text.fontSize * this.text.scaleX)
    }

    set color(color: string) {
        this.text.fill = color
        this.canvas.renderAll()
    }

    get color(): string {
        return this.text.fill as string
    }

    set strokeSize(size: number) {
        this.text.set({
            strokeWidth: size,
            fontSize: TextEditor.toPixelSize(this.size),
            scaleX: 1,
            scaleY: 1
        })
        this.canvas.renderAll()
    }

    get strokeSize(): number {
        return this.text.strokeWidth
    }

    set strokeColor(color: string) {
        this.text.stroke = color
        this.canvas.renderAll()
    }

    get strokeColor(): string {
        return this.text.stroke as string || '#ffffff'
    }

    get settingObject() {
        const that = this
        return new Proxy({
            // size: that.size,
            color: that.color,
            font: '',
            // maxWidth: that.maxWidth,
            style: TextStyle.PLAIN,
            align: TextAlign.LEFT,
            wrap: TextWrap.NONE,
            strokeSize: that.strokeSize,
            strokeColor: that.strokeColor,
            _delete: () => that.remove()
        }, {
            set: (target, prop, value) => {
                target[prop] = value
                that[prop] = value
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
            // size: {...range, max: 128},
            // maxWidth: {...range, max: this.canvas.width},
            style: {
                type: 'select',
                options: Object.values(TextStyle)
            },
            align: {
                type: 'select',
                options: Object.values(TextAlign)
            },
            wrap: {
                type: 'select',
                options: Object.values(TextWrap)
            },
            strokeSize: {...range, max: 16},
            font: {type: 'font'}
        }
    }

    remove() {
        this.canvas.remove(this.text)
        this.canvas.renderAll()
        this.isRemoved = true
    }

    get compiledTemplate(): TextTemplate | null {
        return this.isRemoved ? null : {
            text: this.text.text as string,
            pos: this.pos,
            color: this.color,
            size: Math.round(this.size),
            align: this.#align,
            wrap: this.#wrap,
            style: this.style,
            strokeColor: this.strokeColor,
            strokeSize: this.strokeSize
        }
    }

    static toPointsSize(pixelSize: number): number {
        return pixelSize / TextModel.dpiScale
    }

    static toPixelSize(pointsSize: number): number {
        return pointsSize * TextModel.dpiScale
    }
}

function copyTextOption(origin: fabric.IText, target: fabric.IText) {
    const {
        left,
        top,
        text,
        fill,
        textAlign,
        fontSize,
        fontWeight,
        fontStyle,
        width
    } = origin
    target.set({left, top, text, fill, textAlign, fontSize, fontWeight, fontStyle, width})
}
