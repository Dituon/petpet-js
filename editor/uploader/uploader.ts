import {createTitle} from "../../src/app/utils";
import {decodeGif} from "../../src/core/gif-synthesis/decoder";
import {getCanvasFromBlob} from "../../src/core/utils/utils";

import './uploader.css'

export class Uploader {
    private element = document.createElement('div')
    private labelElement = document.createElement('label')
    private fileInputElement = document.createElement('input')
    private onchangeCallback: (args: HTMLCanvasElement[]) => unknown
    private showCallback: (args: HTMLCanvasElement[]) => unknown
    private files

    constructor() {
        this.element.classList.add('uploader', 'hidden')

        this.element.addEventListener('dragenter', stopPropagation, false)
        this.element.addEventListener('dragover', stopPropagation, false)
        this.element.addEventListener('drop', e => this.setFiles(e.dataTransfer.files), false)

        this.fileInputElement.type = 'file'
        this.fileInputElement.accept = "image/*,video/*"
        this.fileInputElement.addEventListener('change', () => this.setFiles(this.fileInputElement.files))

        this.element.addEventListener('click', () => this.fileInputElement.click())
        this.element.innerHTML = '拖拽或点击'

        this.hide()
    }

    async setFiles(files: FileList) {
        const frames: HTMLCanvasElement[] = []
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i)

            if (file.type === 'image/gif') {
                frames.push(...await decodeGif(file))
            } else if (file.type.startsWith('image/')) {
                frames.push(await getCanvasFromBlob(file))
            } else if (file.type.startsWith('video/')) {
                // TODO
                throw new Error()
            } else {
                throw new Error()
            }
        }
        this.showCallback && this.showCallback(frames)
        this.onchangeCallback && this.onchangeCallback(frames)
    }

    set onchange(callback: (args: HTMLCanvasElement[]) => unknown) {
        this.onchangeCallback = callback
    }

    async show(): Promise<HTMLCanvasElement[]> {
        this.element.classList.remove('hidden')
        return new Promise(res => this.showCallback = res)
    }

    hide() {
        this.element.classList.add('hidden')
    }

    render() {
        const root = document.createElement('div')
        root.append(
            createTitle("上传背景"),
            this.element
        )
        return root
    }
}

function stopPropagation(e) {
    e.stopPropagation()
    e.preventDefault()
}
