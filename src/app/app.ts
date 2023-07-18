import {TemplateSelector} from "./template-selector";
import {AvatarUploader} from "./uploader";
import {PetpetModel, PetpetModelViewer, PetpetTemplate} from "../core/model/petpet-model";
import {ResultArea} from "./result-area/result-area";
import {Setting} from "./setting/setting";
import {Downloader} from "./downloader/downloader";

import "./app.css"
import {RepoLoader} from "./loader/repo-loader";
import config from "../../config";
import {TextUploader} from "./uploader/text-uploader";

/** @typedef { 'FROM' | 'TO' | 'BOT' | 'GROUP' } AvatarType */

export default class {
    protected appElement: HTMLDivElement
    protected templateChooser: TemplateSelector
    protected avatarUploader: AvatarUploader
    protected textUploader: TextUploader
    protected resultArea: ResultArea

    protected inputElement = document.createElement('div')
    protected outputElement = document.createElement('div')

    private prevTemplate: PetpetTemplate
    private readonly initPromise: Promise<void>
    private backgroundLengthMap: Map<string, number>

    private viewer: PetpetModelViewer

    constructor(id: string) {
        this.appElement = document.getElementById(id) as HTMLDivElement
        this.appElement.classList.add('petpet-app')

        this.templateChooser = new TemplateSelector()
        this.templateChooser.onchange = () => this.update()
        this.avatarUploader = new AvatarUploader()
        this.avatarUploader.onchange = () => this.update()
        this.textUploader = new TextUploader()
        this.inputElement.append(
            this.templateChooser.render(),
            this.avatarUploader.render(),
            this.textUploader.render()
        )

        this.resultArea = new ResultArea()
        this.outputElement.appendChild(this.resultArea.render())
        this.outputElement.style.display = 'none'

        this.appElement.append(this.inputElement, this.outputElement)
        this.initPromise = this.init()
        this.update()
    }

    private async init() {
        const repoLoader = new RepoLoader(config.server)
        const idMap = await repoLoader.getIdMap()
        this.backgroundLengthMap = await repoLoader.getLengthMap()
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
        if (this.viewer) this.viewer.destroy()

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

        const petpet = new PetpetModel(template)
        petpet.backgroundLength = this.backgroundLengthMap.get(template.key)
        petpet.background = template.url

        const viewer = await petpet.generate(
            this.avatarUploader.data,
            this.avatarUploader.extraTemplate
        )
        this.textUploader.texts = petpet.textModelList
        await viewer.play()

        this.resultArea.canvas = viewer.canvas
        const settingElement = document.createElement('div')
        this.resultArea.setting = settingElement

        const viewerSetting = new Setting(viewer.settingObject, {
            delay: {
                type: 'range',
                min: 1,
                max: 256,
                step: 1
            }
        })
        settingElement.appendChild(viewerSetting.render())

        const downloader = new Downloader(viewer)
        settingElement.appendChild(await downloader.renderAsync())

        this.prevTemplate = template
        this.viewer = viewer
    }

    // render() {
    //     return this.appElement
    // }
}