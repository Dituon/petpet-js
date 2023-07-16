import './uploader.css'
import {AvatarItem} from "./avatar-item.js"
import {createTitle} from "../utils/utils.js";

const TYPES = ['FROM', 'TO', 'BOT', 'GROUP']

export class AvatarUploader {
    static types = TYPES
    /** @type {HTMLDivElement} */
    #element
    /** @type {Map<string, AvatarItem>} */
    #itemMap = new Map(
        TYPES.map(type => [type, new AvatarItem(type)])
    )
    #frameItems: AvatarItem[]
    /** @type {() => AvatarUploader} */
    #callback

    constructor() {
        this.#element = document.createElement('div')
        this.#element.className = 'avatar-uploader'
        this.#element.innerHTML = 'No Avatar'
    }

    /** @param {AvatarType[] | null} types */
    set types(types) {
        if (!types || types.length === 0) {
            this.#element.innerHTML = 'No Avatar'
            return
        }
        this.#element.innerHTML = ''
        this.#frameItems = types.map(t => this.#itemMap.get(t))
        this.#element.append(...this.#frameItems.map(i => i.render()))
    }

    render() {
        const root = document.createElement('div')
        root.append(
            createTitle('Upload Avatar'),
            this.#element
        )
        return root
    }

    get ready() {
        if (!this.#frameItems?.length) return true
        return this.#frameItems.some(i => i.file)
    }

    set onchange(callback) {
        for (const avatarItem of this.#itemMap.values()) {
            avatarItem.onchange = () => this.ready && callback(this)
        }
    }

    /** @return {AvatarData} */
    get data() {
        const obj = {}
        if (!this.#frameItems?.length) return obj
        for (const item of this.#frameItems) {
            obj[item.type.toLowerCase()] = item.file
        }
        return obj
    }
}