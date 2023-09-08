import './template-selector.css'
import {Loading} from "../utils/ui"
import {loadTemplate, PetpetTemplatePreview, TemplateModalSelector} from "./template-modal-selector"
import {PetpetTemplate} from "../../core";
import {createTitle} from "../utils";
import {getLangConfig} from "../lang/lang-loader";

export class TemplateSelector {
    #element: HTMLDivElement = document.createElement('div')
    #modal: TemplateModalSelector
    #templates: PetpetTemplatePreview[]
    loading: Loading = new Loading(this.#element)
    #onChangeCallback
    template: PetpetTemplate

    constructor(templates?: PetpetTemplatePreview[]) {
        this.#modal = new TemplateModalSelector(templates)
        this.#element.classList.add('template-chooser')
        this.#element.textContent = getLangConfig().notSelected
        this.#element.addEventListener('click', async () => {
            const template = await this.showModal()
            this.#onChangeCallback && this.#onChangeCallback(template)
        })
        if (!templates) {
            this.loading.show()
            return
        }
        this.templates = templates
    }

    set templates(templates: PetpetTemplatePreview[]) {
        this.loading.hide()
        this.#templates = templates
        this.#modal.templates = templates
    }

    async setTemplate(key: string) {
        if (!key) return
        const template = this.#templates.find(t => t.key === key)
        if (!template) throw new Error(`key ${key} not found`)
        this.#element.textContent = template.key
        this.template = await loadTemplate(template)
    }

    get templateKey() {
        return this.template?.key
    }

    render() {
        const root = document.createElement('div')
        root.append(
            createTitle(getLangConfig().selectTemplate),
            this.#element
        )
        return root
    }

    async showModal() {
        const template = await this.#modal.show()
        if (template) this.#element.textContent = template.key
        this.template = template
        return template
    }

    /** @param {(PetpetTemplate)=>void} callback */
    set onchange(callback) {
        this.#onChangeCallback = callback
    }
}