import './setting.css'

type SettingValue = string | number | boolean | SettingObject | (() => void) | (() => Promise<void>)

interface SettingObject {
    [key: string]: SettingValue
}

export class Setting {
    private readonly obj: SettingObject
    private readonly container: HTMLDivElement

    constructor(obj: SettingObject) {
        this.obj = obj
        this.container = document.createElement('div')
        this.container.classList.add('setting-container')
    }

    private createInput(key: string, value: SettingValue): HTMLElement {
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
                    await (value as any)()
                    button.disabled = false
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
                        callbackFun = () => this.obj[key] = input.value === 'true'
                        break
                }
                input.type = type
                input.value = value.toString()
                input.addEventListener('change', callbackFun)
                div.appendChild(input)
                break
        }
        return div
    }

    public render(): HTMLDivElement {
        for (const [key, value] of Object.entries(this.obj)) {
            const element = this.createInput(key, value) as HTMLInputElement
            this.container.appendChild(element)
        }
        return this.container
    }
}
