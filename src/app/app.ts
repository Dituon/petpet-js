import config from "../../config.js"
import {TemplateSelector} from "./template-selector"
import {AvatarUploader} from "./uploader";
import {ResultArea} from "./result-area/result-area.js";

import "./app.css"
import {Setting} from "./setting/setting.js";
import {PetpetModel, PetpetTemplate} from "../core/model/petpet-model.js";
import {RepoLoader} from "./loader/repo-loader";

/** @typedef { 'FROM' | 'TO' | 'BOT' | 'GROUP' } AvatarType */
/** @typedef { { version: number, petData: PetpetTemplate[], url: string } } PetDataDTO */

export default class {
    #parentElement: HTMLElement
    #template: PetpetTemplate
    #templateChooser: TemplateSelector
    #uploader: AvatarUploader
    #resultArea: ResultArea

    /** @param { string } id */
    constructor(id) {
        this.#constructorAsync(id)
    }

    async #constructorAsync(id) {
        this.#parentElement = document.getElementById(id)
        this.#templateChooser = new TemplateSelector()
        this.#parentElement.appendChild(this.#templateChooser.render())

        await this.#init()
        const template = await this.#templateChooser.showModal()
        this.#templateChooser.onchange = async t => this.#updateTemplate(t)

        await this.#updateTemplate(template)
    }

    async #init() {
        const repoLoader = new RepoLoader(config.server)
        const idMap = await repoLoader.getIdMap()
        const templates = []
        for (const [id, url] of idMap.entries()) {
            templates.push({
                key: id,
                url: url
            })
        }
        this.#templateChooser.templates = templates
        if (!(await repoLoader.getUrlSet()).size) this.#templateChooser.loading.error()
        return true
    }

    /** @param {PetpetTemplate} template */
    #updateTemplate = async template => {
        if (!template) return
        template = await template
        this.#template = template
        if (!this.#uploader) {
            this.#uploader = new AvatarUploader()
            this.#uploader.onchange = () => this.generate()
            this.#parentElement.appendChild(this.#uploader.render())
        }

        this.#uploader.types = [...new Set(template.avatar.map(a => a.type))]
        await this.generate()
    }

    async generate() {
        if (!this.#uploader || !this.#uploader.ready) return
        if (!this.#resultArea) {
            this.#resultArea = new ResultArea()
            this.#parentElement.appendChild(this.#resultArea.render())
        }

        const petpet = new PetpetModel(this.#template, this.#template.url)
        const viewer = await petpet.generate(this.#uploader.data)
        await viewer.play()

        // const blob = await encodeGif(await viewer.getFrames(), viewer.delay)

        this.#resultArea.canvas = viewer.canvas

        const viewerSetting = new Setting(viewer.settingObject)
        this.#resultArea.setting = viewerSetting.render()
    }
}