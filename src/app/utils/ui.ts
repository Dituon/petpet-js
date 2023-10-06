import './loading.css'
import './ui.css'

const showMessage = (value, time = 1000) => {
    const message = document.getElementById('message')
    if (message) message.remove()

    const div = document.createElement('div')
    div.id = 'message'
    div.innerText = value
    document.body.appendChild(div)
    setTimeout(() => {
        div.style.top = '0px'
    }, 1)
    setTimeout(() => {
        div.style.top = ''
    }, time)
}

export {showMessage}

const div = () => document.createElement('div')

export class Loading {
    /** @type { HTMLElement } */
    #element
    /** @type { HTMLDivElement } */
    #maskElement

    /** @param { HTMLDivElement } element */
    constructor(element) {
        this.#element = element
    }

    show() {
        if (this.#maskElement) return
        const mask = div()
        mask.className = 'loading'
        mask.append(div(), div(), div())
        this.#element.appendChild(mask)
        mask.addEventListener('click', this.#onclick)
        this.#maskElement = mask
        return this
    }

    hide() {
        if (!this.#maskElement) return
        this.#maskElement.remove()
        this.#maskElement = null
        return this
    }

    error() {
        let errText = '加载失败'
        this.#maskElement.innerHTML = `<span>${errText}</span>`
        throw new Error(errText)
    }

    #onclick(e) {
        e.stopPropagation()
    }
}

export class Mask {
    /** @type { HTMLElement } */
    element
    /** @type { boolean } */
    showing
    timer

    constructor() {
        this.element = document.createElement('div')
        this.element.className = 'mask'
        document.body.appendChild(this.element)
        this.showing = false
    }

    /**
     * @param {Function} callback
     */
    set onclick(callback) {
        this.element.onclick = callback
    }

    show() {
        if (this.timer) {
            clearTimeout(this.timer)
            this.timer = null
        }
        this.element.style.pointerEvents = 'auto'
        this.element.style.display = 'block'
        setTimeout(() => this.element.style.opacity = '0.5', 10)
    }

    hide() {
        this.element.style.opacity = '0'
        this.element.style.pointerEvents = 'none'
        this.timer = setTimeout(() => this.element.style.display = 'none', 1000)
    }

    toggle() {
        this.showing ? this.hide() : this.show()
    }

    destroy() {
        this.element.remove()
    }
}