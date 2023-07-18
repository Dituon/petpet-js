import './modal-selector.css'
import {Mask} from "../utils/ui"
import {createTitle} from "../utils";
import {PetpetTemplate} from "../../core/model/petpet-model";

export class TemplateModalSelector {
    #element: HTMLElement
    #templates: PetpetTemplate[]
    #templateDomMap: Map<PetpetTemplate, HTMLDivElement> = new Map()
    #dataListDom: HTMLDivElement
    #selectCallback!: (template: PetpetTemplate | null) => void
    private mask = new Mask()

    constructor(templates?: PetpetTemplate[]) {
        this.mask.onclick = () => {
            this.#selectCallback && this.#selectCallback(null)
            this.hide()
        }
        if (!templates) return
        this.templates = templates
    }

    set templates(templates: PetpetTemplate[]) {
        this.#element = document.createElement('div')
        this.#element.className = 'modal-select'
        this.#templates = templates

        const templatesDom = document.createElement('div')
        templatesDom.className = 'index-list'
        this.#dataListDom = templatesDom

        for (const template of templates) {
            // template.key = key
            // template.url = url

            const templateDom = document.createElement('div')
            const img = document.createElement('img')
            img.src = `${template.url}/0.png`
            img.alt = template.key
            img.loading = 'lazy'

            const h3 = createTitle(template.key)
            if (template.alias) {
                template.alias.forEach(alia => h3.appendChild(createTitle(alia, 'span')))
            }
            templateDom.append(img, h3)

            templateDom.addEventListener('click', async e => {
                this.#selectCallback(await loadTemplate(template))
                this.hide()
            })

            this.#templateDomMap.set(template, templateDom)
            templatesDom.appendChild(templateDom)
        }

        const inputEle = document.createElement('input')
        inputEle.placeholder = '🔍 type to search'

        inputEle.addEventListener('change', (e) => {
            this.search(inputEle.value.trim())
        })

        this.#element.append(inputEle, templatesDom)
        this.#element.classList.add('hide')

        document.body.appendChild(this.#element)
    }

    hide() {
        this.mask.hide()
        this.#element.classList.add('hide')
    }

    async show(): Promise<PetpetTemplate> {
        if (!this.#templates) return null
        this.mask.show()
        this.#element && this.#element.classList.remove('hide')
        return new Promise((res) => (this.#selectCallback = res))
    }

    search(word: string) {
        this.#dataListDom.innerHTML = ''
        for (let [template, dom] of this.#templateDomMap.entries()) {
            const {key, alias} = template
            if (!key.includes(word) && !(alias && alias.find((k) => k.includes(word)))) {
                continue
            }
            this.#dataListDom.appendChild(dom)
        }
    }
}

async function loadTemplate(template: PetpetTemplate): Promise<PetpetTemplate>{
    if (template.type) return template
    const originTemplate = await fetch(template.url + '/data.json').then(p => p.json())
    return {...template, ...originTemplate}
}
