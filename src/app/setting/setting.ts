import './setting.css'

type SettingValue = string | number | boolean | undefined | SettingObject | (() => void) | (() => Promise<void>)

// type SettingDescription = string | number | boolean |

export interface SettingObject {
    [key: string]: SettingValue

    _delete?: () => void | unknown
}

export type ValueAttribute = {
    [key in keyof HTMLInputElement]: HTMLInputElement[key];
} | {}

export interface ValueAttributeMap {
    [key: string]: ValueAttribute
}

export class Setting {
    private readonly obj: SettingObject
    private readonly container: HTMLDivElement
    private readonly attrMap: ValueAttributeMap

    constructor(obj: SettingObject, attrMap?: ValueAttributeMap) {
        // if (!Object.keys(obj).length) return
        this.obj = obj
        this.container = document.createElement('div')
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
    }

    private createInput(key: string, value: SettingValue): HTMLElement {
        const attrs: ValueAttribute = this.attrMap[key] ?? {}
        const div = document.createElement('div')
        const span = document.createElement('span')
        span.textContent = key
        div.appendChild(span)

        let type = typeof value
        switch (type) {
            case "object":
                const nestedContainer = new Setting(value as any).render()
                div.appendChild(nestedContainer)
                break
            case "function":
                const button = document.createElement('button')
                button.textContent = key
                button.addEventListener('click', async () => {
                    button.disabled = true
                    try {
                        await (value as Function)()
                    } finally {
                        button.disabled = false
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

    public render(): HTMLDivElement {
        for (const [key, value] of Object.entries(this.obj)) {
            if (value === undefined || value === null) continue
            const element = this.createInput(key, value) as HTMLInputElement
            this.container.appendChild(element)
        }
        return this.container
    }
}
