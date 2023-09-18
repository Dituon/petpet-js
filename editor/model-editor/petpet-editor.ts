import {defaultPetpetTemplate, PetpetTemplate, PetpetType} from "../../src/core/model/petpet-model";
import {fabric} from 'fabric'
import {AvatarEditor} from "./avatar-editor";
import {Setting} from "../../src/app/setting/setting";

import './editor.css'
import {TextEditor} from "./text-editor";

export class PetpetEditor {
    protected template: PetpetTemplate = {
        ...defaultPetpetTemplate,
        avatar: undefined,
        text: undefined,
        key: 'my-petpet'
    }
    private readonly baseCanvas = document.createElement('canvas')
    protected fabricCanvas: fabric.Canvas
    protected avatarEditors: AvatarEditor[] = []
    protected textEditors: TextEditor[] = []

    protected frames: HTMLCanvasElement[]

    protected settingElement = document.createElement('div')
    private elementSettingsDiv = document.createElement('div')
    protected editorElement = document.createElement('div')
    protected frameAreaElement = document.createElement('div')

    protected frameList: HTMLDivElement
    private frameIndex = 0

    // protected textEditors: TextEditor[] = []

    constructor(frames: HTMLCanvasElement[]) {
        this.template.type = frames.length === 1 ? PetpetType.IMG : PetpetType.GIF
        this.frames = frames

        this.frameAreaElement.appendChild(this.baseCanvas)

        this.frameAreaElement.classList.add('frame-editor')
        if (this.frames[0].width * 1.2 > this.frames[0].height) this.frameAreaElement.classList.add('sticky')

        if (this.template.type === PetpetType.GIF) {
            this.frameList = this.frameListElement
            this.frameAreaElement.appendChild(this.frameList)
        }
        this.frameAreaElement.addEventListener('contextmenu', e => {
            e.preventDefault()
            this.frameAreaElement.classList.toggle('sticky')
        })

        this.editorElement.appendChild(this.frameAreaElement)

        this.settingElement.append(
            new Setting(this.settingObject).render(),
            this.elementSettingsDiv
        )

        this.fabricCanvas = new fabric.Canvas(this.baseCanvas)
        this.fabricCanvas.setWidth(frames[0].width)
        this.fabricCanvas.setHeight(frames[0].height)
        this.fabricCanvas.setDimensions({
            width: '100%',
            height: 'unset',
        }, {cssOnly: true})

        this.index = 0
    }

    addAvatar() {
        const editor = new AvatarEditor(this.fabricCanvas)
        this.avatarEditors.push(editor)
        this.elementSettingsDiv.appendChild(new Setting(
            editor.settingObject,
            editor.settingAttributes as any,
            `Avatar - ${this.avatarEditors.length}`
        ).render())
    }

    addText() {
        const editor = new TextEditor(this.fabricCanvas)
        this.textEditors.push(editor)
        this.elementSettingsDiv.appendChild(new Setting(
            editor.settingObject,
            editor.settingAttributes as any,
            `Text - ${this.textEditors.length}`
        ).render())
    }

    get settingObject() {
        const that = this
        return new Proxy({
            key: this.template.key,
            set fps(fps) {
                that.template.delay = Math.round(1000 / fps)
            },
            get fps() {
                return Math.round(1000 / that.template.delay)
            },
            set alias(str) {
                that.template.alias = str.split(/\s+/)
            },
            get alias() {
                return that.template.alias.join('  ')
            },
            inRandomList: this.template.inRandomList,
            reverse: this.template.reverse,

            addAvatar: () => this.addAvatar(),
            addText: () => this.addText()
        }, {
            set(target, key: string, value: any) {
                that.template[key] = value
                target[key] = value
                return true
            }
        })
    }

    protected get frameListElement() {
        const element = document.createElement('div')
        element.classList.add('frame-list')
        for (let i = 0; i < this.frames.length; i++) {
            this.frames[i].addEventListener('click', () => this.index = i)
            element.appendChild(this.frames[i])
        }
        return element
    }

    set index(num: number) {
        this.fabricCanvas.backgroundImage = new fabric.Image(this.frames[num])
        this.avatarEditors.forEach(a => a.index = num)
        // this.textEditors.forEach(t => t.draw())
        this.fabricCanvas.renderAll()
        if (this.template.type === PetpetType.IMG) return
        this.frames[this.frameIndex].dataset.checked = ''
        this.frames[num].dataset.checked = 'checked'
        this.frameIndex = num
    }

    get key() {
        return this.template.key
    }

    get compiledTemplate(): PetpetTemplate {
        return {
            ...this.template,
            avatar: this.avatarEditors.map(a => a.compiledTemplate),
            text: this.textEditors.map(t => t.compiledTemplate),
            key: undefined
        }
    }

    render() {
        return [this.settingElement, this.editorElement]
    }
}