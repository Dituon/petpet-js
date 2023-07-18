import * as Croppr from 'croppr'
import 'croppr/dist/croppr.css'
import {getImageFromBlob} from "../../core/utils/utils"
import {Mask} from "../utils/ui"

import './avatar-cropper.css'

export class AvatarCropper {
    #element = document.createElement('div')
    private croppr: Croppr
    private mask = new Mask()
    private callback!: (template: [number, number, number, number] | null) => void

    imageFile: File
    private readonly initPromise: Promise<void>

    constructor(imageFile: File) {
        this.#element.classList.add('avatar-cropper')
        this.imageFile = imageFile
        this.mask.onclick = () => this.cancel()
        this.initPromise = this.init()
    }

    async init() {
        const image = await getImageFromBlob(this.imageFile)
        this.#element.appendChild(image)
        document.body.append(this.#element)
        this.croppr = new Croppr(image, {
            startSize: [90, 60],
            minSize: [1, 1, 'px'],
            returnMode: 'real'
        })
        const buttons = document.createElement('div')
        buttons.className = 'button-group'
        const cancelButton = document.createElement('div')
        cancelButton.innerText = 'Cancel'
        cancelButton.addEventListener('click', () => this.cancel())
        const saveButton = document.createElement('div')
        saveButton.innerText = 'Save'
        saveButton.addEventListener('click', () => this.save())
        buttons.append(cancelButton, saveButton)
        this.#element.appendChild(buttons)
    }

    private cancel() {
        this.callback(null)
        this.hide()
    }

    private save() {
        const {x, y, width, height} = this.croppr.getValue('real')
        this.callback([x, y, x + width, y + height])
        this.hide()
    }

    hide() {
        this.#element.classList.add('hide')
        this.mask.hide()
    }

    async show(): Promise<[number, number, number, number] | null> {
        await this.initPromise
        this.mask.show()
        this.#element.classList.remove('hide')
        return new Promise((res) => (this.callback = res))
    }

    async destroy() {
        await this.initPromise
        this.#element.remove()
        this.croppr.destroy()
        this.mask.destroy()
    }
}