import './setting.css'
import {getLangConfig} from "../loader/lang-loader";
import {createTitle} from "../utils";

const lang = getLangConfig()

type SettingValue =
    string
    | number
    | boolean
    | object
    | undefined
    | SettingObject
    | (() => void)
    | (() => Promise<void>)

// type SettingDescription = string | number | boolean |

export interface SettingObject {
    [key: string]: SettingValue

    _delete?: () => void | unknown
}

export type ValueAttribute = {
    [key in keyof HTMLInputElement]?: HTMLInputElement[key]
}
// & {
//     tagName?: keyof HTMLElementTagNameMap,
// }

export interface ValueAttributeMap {
    [key: string]: ValueAttribute & { options?: string[] }
}

export class Setting {
    private readonly obj: SettingObject
    private readonly container: HTMLDivElement | HTMLFieldSetElement
    private readonly attrMap: ValueAttributeMap

    constructor(obj: SettingObject | object, attrMap?: ValueAttributeMap, title?: string) {
        // if (!Object.keys(obj).length) return
        this.obj = obj as SettingObject
        this.container = document.createElement(title ? 'fieldset' : 'div')
        if (title) this.container.appendChild(createTitle(title, 'legend'))
        this.container.classList.add('setting-container')
        this.attrMap = attrMap ?? {}

        if (this.obj._delete) {
            const originFun = this.obj._delete
            delete this.obj._delete
            this.obj['delete'] = () => {
                typeof originFun === 'function' && originFun()
                this.container.remove()
            }
        }

        for (const [key, value] of Object.entries(this.obj)) {
            if (value === undefined || value === null) continue
            const element = this.createElement(key, value)
            this.container.appendChild(element)
        }
    }

    private createElement(key: string, value: SettingValue): HTMLElement {
        const attrs: ValueAttribute = this.attrMap[key] ?? {}
        let div: HTMLDivElement | HTMLFieldSetElement = document.createElement('div')
        const label = document.createElement('label')
        label.textContent = lang[key] ?? key
        div.appendChild(label)

        switch (attrs.type) {
            case 'font':
                const fontSelect = document.createElement("select")

                fontSelect.addEventListener("change", () => this.obj[key] = fontSelect.value)

                document.fonts.forEach(font => {
                    const fontFamily = font.family
                    const fontOption = document.createElement("option")
                    fontOption.style.fontFamily = fontFamily
                    fontOption.value = fontFamily
                    fontOption.textContent = fontFamily
                    fontOption.selected = fontFamily === this.obj[key]
                    fontSelect.appendChild(fontOption)
                })

                div.appendChild(fontSelect)
                return div
            case 'select':
                const selectElement = document.createElement("select")

                selectElement.addEventListener("change", () => this.obj[key] = selectElement.value)

                // @ts-ignore
                attrs.options.forEach(option => {
                    const optionElement = document.createElement("option")
                    optionElement.value = option
                    optionElement.textContent = option
                    optionElement.selected = option === value
                    selectElement.appendChild(optionElement)
                })

                div.appendChild(selectElement)
                return div
        }

        let type = typeof value
        switch (type) {
            case "object":
                div = new Setting(
                    value as any,
                    attrs[key],
                    key
                ).render()
                break
            case "function":
                const button = document.createElement('button')
                button.textContent = key
                button.addEventListener('click', async () => {
                    button.disabled = true
                    button.style.cursor = 'progress'
                    try {
                        await (value as Function)()
                    } finally {
                        button.disabled = false
                        button.style.cursor = 'pointer'
                    }
                })
                div.appendChild(button)
                break
            default:
                const input = document.createElement('input')
                let callbackFun: () => unknown = () => this.obj[key] = input.value
                switch (typeof value) {
                    case "number":
                        callbackFun = () => this.obj[key] = parseFloat(input.value)
                        break
                    case 'string':
                        // @ts-ignore
                        type = /^#([A-Fa-f0-9]{6})$/.test(value) ? 'color' : 'text'
                        break
                    case 'boolean' :
                        // @ts-ignore
                        type = 'checkbox'
                        input.checked = value
                        callbackFun = () => this.obj[key] = input.checked
                        break
                }
                input.type = type
                for (let [attr, v] of Object.entries(attrs)) {
                    input[attr] = v
                }
                input.value = value.toString()
                input.addEventListener('input', callbackFun)
                div.appendChild(input)
                break
        }
        return div
    }

    public render(): HTMLDivElement | HTMLFieldSetElement {
        return this.container
    }
}
