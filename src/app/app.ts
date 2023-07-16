import {TemplateSelector} from "./template-selector";
import {AvatarUploader} from "./uploader";
import {PetpetModel, PetpetTemplate} from "../core/model/petpet-model";
import {ResultArea} from "./result-area/result-area";
import {Setting} from "./setting/setting";
import {Downloader} from "./downloader/downloader";

import "./app.css"
import {RepoLoader} from "./loader/repo-loader";
import config from "../../config";
/** @typedef { 'FROM' | 'TO' | 'BOT' | 'GROUP' } AvatarType */

export default class {
    protected appElement: HTMLDivElement
    protected templateChooser: TemplateSelector
    protected avatarUploader: AvatarUploader
    protected resultArea: ResultArea

    protected inputElement = document.createElement('div')
    protected outputElement = document.createElement('div')

    private prevTemplate: PetpetTemplate
    private initPromise: Promise<void>

    constructor(id: string) {
        this.appElement = document.getElementById(id) as HTMLDivElement
        this.appElement.classList.add('petpet-app')

        this.templateChooser = new TemplateSelector()
        this.templateChooser.onchange = () => this.update()
        this.avatarUploader = new AvatarUploader()
        this.avatarUploader.onchange = () => this.update()
        this.inputElement.append(
            this.templateChooser.render(),
            this.avatarUploader.render()
        )

        this.resultArea = new ResultArea()
        this.outputElement.appendChild(this.resultArea.render())
        this.outputElement.style.display = 'none'

        this.appElement.append(this.inputElement, this.outputElement)
        this.initPromise = this.init()
        this.update()
    }

    private async init(){
        const repoLoader = new RepoLoader(config.server)
        const idMap = await repoLoader.getIdMap()
        const templates = []
        for (const [id, url] of idMap.entries()) {
            templates.push({
                key: id,
                url: url
            })
        }
        this.templateChooser.templates = templates
        if (!(await repoLoader.getUrlSet()).size) this.templateChooser.loading.error()
    }

    async update() {
        await this.initPromise

        const template = this.templateChooser.template || await this.templateChooser.showModal()
        if (this.prevTemplate !== template) {
            this.avatarUploader.types = [...new Set(template.avatar.map(a => a.type))]
        }
        if (!this.avatarUploader.ready) {
            this.outputElement.style.display = 'none'
            return
        }

        this.outputElement.style.display = 'flex'
        this.resultArea.showLoading()

        const petpet = new PetpetModel(template, template.url)
        const viewer = await petpet.generate(this.avatarUploader.data)
        await viewer.play()

        this.resultArea.canvas = viewer.canvas
        const settingElement = document.createElement('div')
        this.resultArea.setting = settingElement

        const viewerSetting = new Setting(viewer.settingObject)
        settingElement.appendChild(viewerSetting.render())

        const downloader = new Downloader(viewer)
        settingElement.appendChild(await downloader.renderAsync())

        this.prevTemplate = template
    }

    // render() {
    //     return this.appElement
    // }
}