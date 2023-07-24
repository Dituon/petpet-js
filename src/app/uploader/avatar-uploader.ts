import './uploader.css'
import {AvatarItem} from "./avatar-item.js"
import {createTitle} from "../utils/utils.js";
import {AvatarCropType, AvatarData, ExtraTemplate} from "../../core/model/avatar-model";
import {getLangConfig} from "../lang/lang-loader";

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

    constructor() {
        this.#element = document.createElement('div')
        this.#element.className = 'avatar-uploader'
        this.#element.innerHTML = getLangConfig().noAvatar
    }

    /** @param {AvatarType[] | null} types */
    set types(types) {
        if (!types || types.length === 0) {
            this.#element.innerHTML = getLangConfig().noAvatar
            return
        }
        this.#element.innerHTML = ''
        this.#frameItems = types.map(t => this.#itemMap.get(t))
        this.#element.append(...this.#frameItems.map(i => i.render()))
    }

    render() {
        const root = document.createElement('div')
        root.append(
            createTitle(getLangConfig().uploadAvatar),
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

    get data() {
        const obj: AvatarData = {}
        if (!this.#frameItems?.length) return obj
        for (const item of this.#frameItems) {
            obj[item.type.toLowerCase()] = item.file
        }
        return obj
    }

    get extraTemplate() {
        const obj: ExtraTemplate = {}
        let flag = false
        if (!this.#frameItems?.length) return obj
        for (const item of this.#frameItems) {
            flag = flag || !!item.cropPos
            obj[item.type.toLowerCase()] = {
                cropType: AvatarCropType.PIXEL,
                crop: item.cropPos
            }
        }
        return flag ? obj : undefined
    }
}