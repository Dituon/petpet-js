import {Loading} from "../utils/ui.js";
import './result-area.css'
import {createTitle} from "../utils";

export class ResultArea {
    #parentElement: HTMLDivElement
    #element: HTMLDivElement
    #canvasElement: HTMLCanvasElement
    #settingElement: HTMLDivElement
    #loading: Loading

    constructor() {
        this.#parentElement = document.createElement('div')
        this.#element = document.createElement('div')
        this.#element.id = 'result-area'
        this.#parentElement.append(
            createTitle('Result'),
            this.#element
        )

        this.#canvasElement = document.createElement('canvas')
        this.#hide()
        this.#element.appendChild(this.#canvasElement)
        this.#loading = new Loading(this.#element)
        this.#loading.show()
    }

    set canvas(canvas) {
        this.#loading.show()
        this.#element.innerHTML = ''
        this.#canvasElement = canvas
        this.#element.appendChild(canvas)
        this.#show()
        this.#loading.hide()
    }

    set setting(settingEle: HTMLDivElement) {
        if (this.#settingElement){
            this.#settingElement.remove()
        }
        this.#settingElement = settingEle
        this.#parentElement.appendChild(settingEle)
    }

    #hide() {
        this.#canvasElement.classList.add('hide')
    }

    #show() {
        this.#canvasElement.classList.remove('hide')
    }

    render() {
        return this.#parentElement
    }
}