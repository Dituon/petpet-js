import {Loading} from "../utils/ui.js";
import './result-area.css'
import {createTitle} from "../utils";
import {getLangConfig} from "../loader/lang-loader";

export class ResultArea {
    #parentElement: HTMLDivElement = document.createElement('div')
    #resultElement: HTMLDivElement = document.createElement('div')
    #canvasElement: HTMLCanvasElement = document.createElement('canvas')
    #settingElement: HTMLDivElement
    #loading: Loading

    constructor() {
        this.#resultElement.className = 'result-area'
        this.#parentElement.append(
            createTitle(getLangConfig().result),
            this.#resultElement
        )

        this.#hide()
        this.#resultElement.appendChild(this.#canvasElement)
        this.#loading = new Loading(this.#resultElement)
        this.#loading.show()
    }

    set canvas(canvas) {
        this.#resultElement.innerHTML = ''
        this.#canvasElement = canvas
        this.#resultElement.appendChild(canvas)
        this.#show()
        this.#loading.hide()
    }

    set setting(settingEle: HTMLDivElement) {
        if (this.#settingElement) this.#settingElement.remove()
        this.#settingElement = settingEle
        this.#parentElement.appendChild(settingEle)

    }

    #hide() {
        this.#canvasElement.classList.add('hide')
    }

    #show() {
        this.#canvasElement.classList.remove('hide')
    }

    showLoading() {
        this.#loading.show()
    }

    render() {
        return this.#parentElement
    }
}