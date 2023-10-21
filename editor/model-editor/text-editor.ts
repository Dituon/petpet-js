import {defaultTextTemplate, TextAlign, TextModel, TextStyle, TextTemplate, TextWrap} from "../../src/core"
import {fabric} from "fabric"
import {ITextboxOptions, ITextOptions} from "fabric/fabric-impl"

import '../../src/app/loader/websafe-fonts.css'
import {generateShortenedConfig} from "../util/object-differ";

export const defaultTextOption: ITextOptions | ITextboxOptions = {
    fill: '#191919',
    fontSize: 56,
    fontFamily: TextModel.DEFAULT_FONT_FAMILY,
    stroke: '#ffffff',
    strokeWidth: 1,
    splitByGrapheme: true,
    textAlign: 'left'
}

const baseControlsVisibility = {
    mb: false,
    mt: false,
    // mtr: false
}

export class TextEditor {
    readonly canvas: fabric.Canvas
    itext: fabric.IText
    textBox: fabric.Textbox
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

    get font(): string{
        return this.text.fontFamily
    }

    set font(font: string){
        this.text.fontFamily = font
        this.canvas.renderAll()
    }

    updateWidth() {
        if (this.#wrap !== TextWrap.ZOOM) return
        copyTextOption(this.textBox, this.itext)
        this.textBox.fontSize *= this.textBox.width / this.itext.width - 0.02
        this.#prevWidth = this.textBox.width
    }

    set pos(pos: [number, number] | [number, number, number]) {
        let [x, y] = pos
        switch (this.text.textAlign.toUpperCase()) {
            case TextAlign.RIGHT:
                x -= this.text.getScaledWidth()
                break
            case TextAlign.CENTER:
                x -= this.text.getScaledWidth() / 2
                y += this.text.getScaledHeight() / 2
                break
        }
        this.text.left = x
        this.text.top = y
        this.canvas.renderAll()
    }

    get pos(): [number, number] | [number, number, number] {
        const a = this.text.angle * Math.PI / 180
        const h = this.text.getScaledHeight()
        const xOffset = h * Math.sin(a)
        const yOffset = h * Math.cos(a)

        let x = this.text.left - xOffset
        let y = this.text.top + yOffset
        switch (this.text.textAlign.toUpperCase()) {
            case TextAlign.RIGHT:
                x += this.text.getScaledWidth()
                break
            case TextAlign.CENTER:
                x += (this.text.getScaledWidth() + xOffset) / 2
                y = this.text.top + yOffset / 2
                break
        }

        x = Math.round(x)
        y = Math.round(y)
        return this.wrap === TextWrap.NONE ? [x, y] : [x, y, this.text.width]
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
        this.text.set({textAlign: align.toLowerCase()})
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
        this.text.set({fill: color})
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
            font: that.font,
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
        return this.isRemoved ? null : generateShortenedConfig({
            text: this.text.text as string,
            pos: this.pos,
            angle: this.text.angle,
            color: this.color,
            size: Math.round(this.size),
            font: this.font === TextModel.DEFAULT_FONT_FAMILY ? undefined : this.font,
            align: this.text.textAlign.toUpperCase() as TextAlign,
            wrap: this.#wrap,
            style: this.style,
            strokeColor: this.strokeColor,
            strokeSize: this.strokeSize
        }, defaultTextTemplate)
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
        angle,
        text,
        fill,
        textAlign,
        fontSize,
        fontWeight,
        fontStyle,
        width
    } = origin
    target.set({left, top, angle, text, fill, textAlign, fontSize, fontWeight, fontStyle, width})
}
