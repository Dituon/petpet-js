import {Uploader} from "../uploader/uploader"
import '../../src/app/app.css'
import {PetpetEditor} from "../model-editor/petpet-editor";
import {saveAs} from 'file-saver'
import {Setting} from "../../src/app/setting/setting";
import {PetpetModel} from "../../src/core/model/petpet-model";
import JSZip from "jszip"

import './app.css'
//@ts-ignore
import avatarURL from '../avatar.png'

let avatarBlob: Blob

async function getAvatar(): Promise<Blob> {
    if (avatarBlob) return avatarBlob
    return avatarBlob = await fetch(avatarURL).then(p => p.blob())
}

export default class App {
    protected parentElement: HTMLDivElement
    protected settingElement: HTMLDivElement = document.createElement('div')
    protected editorElement: HTMLDivElement
    protected uploader: Uploader = new Uploader()
    protected previewCanvasArea: HTMLDivElement = document.createElement('div')
    protected previewJsonTextArea: HTMLPreElement = document.createElement('pre')
    protected editor: PetpetEditor
    protected frames: HTMLCanvasElement[]

    private initPromise: Promise<unknown>

    constructor(id: string) {
        this.parentElement = document.getElementById(id) as HTMLDivElement
        this.parentElement.classList.add('petpet-app')
        this.parentElement.appendChild(this.settingElement)
        this.uploader.onchange = frames => {
            this.frames = frames
            this.initPromise = this.init()
        }
        this.settingElement.appendChild(this.uploader.render())
        this.uploader.show()
    }

    protected async init() {
        this.editor = new PetpetEditor(this.frames)
        const [settingElement, framesElement] = this.editor.render()
        this.settingElement.innerHTML = ''
        this.editorElement = framesElement
        this.settingElement.append(this.uploader.render(), settingElement)

        const previewElement = document.createElement('div')
        previewElement.classList.add('output-area')
        previewElement.append(this.previewCanvasArea, this.previewJsonTextArea)

        framesElement.append(
            new Setting({
                preview: () => this.preview(),
                download: () => this.download()
            }).render(),
            previewElement
        )

        this.parentElement.appendChild(this.editorElement)
    }

    protected async preview() {
        const template = this.editor.compiledTemplate
        const preview = new PetpetModel(template, this.frames)
        const previewViewer = await preview.generate({
            from: await getAvatar(),
            to: await getAvatar(),
            group: await getAvatar(),
            bot: await getAvatar()
        })
        this.previewCanvasArea.innerHTML = ''
        this.previewCanvasArea.appendChild(previewViewer.canvas)
        this.previewJsonTextArea.innerHTML = JSON.stringify(template, null, 4)
        await previewViewer.play()
    }

    protected async download() {
        const template = this.editor.compiledTemplate
        const zip = new JSZip()
        const root = zip.folder(this.editor.key)
        let i = 0
        for (let frame of this.frames) {
            //@ts-ignore
            root.file(`${i++}.png`, await new Promise(res => frame.toBlob(res)))
        }
        root.file('data.json', JSON.stringify(template))
        const blob = await zip.generateAsync({type: 'blob'})
        saveAs(blob, `${this.editor.key}.zip`)
    }
}