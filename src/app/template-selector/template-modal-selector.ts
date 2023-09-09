import './modal-selector.css'
import {Mask} from "../utils/ui"
import {createTitle} from "../utils";
import {PetpetTemplate} from "../../core/model/petpet-model";
import {getLangConfig} from "../loader/lang-loader";

export interface PetpetTemplatePreview extends PetpetTemplate {
    key: string
    url: string
    alias?: string[]
}

export class TemplateModalSelector {
    static ICON_SIZE_LIST = ['big', 'medium', 'small']

    #element: HTMLElement = document.createElement('div')
    #templates: PetpetTemplatePreview[]
    #templateDomMap: Map<PetpetTemplatePreview, HTMLDivElement> = new Map()
    #dataListDom: HTMLDivElement
    #selectCallback!: (template: PetpetTemplatePreview | null) => void
    #iconSizeIndex = 0
    private mask = new Mask()

    constructor(templates?: PetpetTemplatePreview[]) {
        this.#element.classList.add('modal-select', 'hide', TemplateModalSelector.ICON_SIZE_LIST[this.#iconSizeIndex])
        this.#element.addEventListener('contextmenu', e => {
            e.preventDefault()
            this.changeIconSize()
        })

        document.body.appendChild(this.#element)

        this.mask.onclick = () => {
            this.#selectCallback && this.#selectCallback(null)
            this.hide()
        }
        if (!templates) return
        this.templates = templates
    }

    set templates(templates: PetpetTemplatePreview[]) {
        this.#templates = templates

        const templatesDom = document.createElement('div')
        templatesDom.className = 'index-list'
        this.#dataListDom = templatesDom

        for (const template of templates) {
            const templateDom = document.createElement('div')
            const img = document.createElement('img')
            img.src = `${template.url}/0.png`
            img.alt = template.key
            img.onerror = () => templateDom.remove()
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
        inputEle.placeholder = `🔍 ${getLangConfig().typeToSearch} / ${getLangConfig().rightClickOrLongPress}`

        inputEle.addEventListener('change', (e) => {
            this.search(inputEle.value.trim())
        })

        this.#element.append(inputEle, templatesDom)
    }

    hide() {
        this.mask.hide()
        this.#element.classList.add('hide')
    }

    async show(): Promise<PetpetTemplatePreview | null> {
        if (!this.#templates) return null
        this.mask.show()
        this.#element && this.#element.classList.remove('hide')
        return new Promise((res) => (this.#selectCallback = res))
    }

    changeIconSize() {
        const newIconSize = (this.#iconSizeIndex + 1) % TemplateModalSelector.ICON_SIZE_LIST.length
        this.#element.classList.replace(
            TemplateModalSelector.ICON_SIZE_LIST[this.#iconSizeIndex],
            TemplateModalSelector.ICON_SIZE_LIST[newIconSize]
        )
        this.#iconSizeIndex = newIconSize
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

export async function loadTemplate(template: PetpetTemplatePreview): Promise<PetpetTemplatePreview> {
    if (template.type) return template
    const originTemplate = await fetch(template.url + '/data.json').then(p => p.json())
    return {...template, ...originTemplate}
}
