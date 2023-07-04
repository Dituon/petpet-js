import {AvatarType} from "../../core/model/avatar-model";

const stopPropagation = e => {
    e.stopPropagation()
    e.preventDefault()
}

export class AvatarItem {
    type
    /** @type {HTMLLabelElement} */
    #element
    #file
    #callbcak
    #resolveWaitFilePromise
    #waitFilePromise = new Promise(res => this.#resolveWaitFilePromise = res)


    /** @param {AvatarType} type */
    constructor(type) {
        this.type = type
        this.#element = document.createElement('label')
        this.#element.setAttribute('type', type)
        this.#element.addEventListener('dragenter', stopPropagation, false)
        this.#element.addEventListener('dragover', stopPropagation, false)
        this.#element.addEventListener("drop", e => {
            stopPropagation(e)
            this.setFiles(e.dataTransfer.files)
        }, false)
        const fileEle = document.createElement('input')
        fileEle.type = 'file'
        fileEle.accept = 'image/*'
        fileEle.addEventListener('change', () => this.setFiles(fileEle.files))
        this.#element.appendChild(fileEle)
    }

    render() {
        return this.#element
    }

    /** @param {(AvatarItem)=>void} callback */
    set onchange(callback) {
        this.#callbcak = callback
    }

    get file() {
        return this.#file
    }

    async waitFile() {
        await this.#waitFilePromise
        return this.#file
    }

    /** @param { FileList } files */
    setFiles(files) {
        let file = files.item(0)
        if (!file) return
        if (!file.type.startsWith('image')) {
            throw new Error("仅支持图片格式")
        }

        this.#element.style.backgroundImage = `url(${URL.createObjectURL(file)})`
        this.#element.style.backgroundSize = 'cover'
        this.#file = file
        this.#resolveWaitFilePromise()
        this.#callbcak && this.#callbcak(this)
    }
}