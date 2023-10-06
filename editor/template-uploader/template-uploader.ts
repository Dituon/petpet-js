import BaseTemplateUploader from "./base-template-uploader";
import {PetpetTemplate} from "../../src/core";
import {config} from "../../src/app/loader";
import {Loading, showMessage} from "../../src/app/utils";

export class TemplateUploader extends BaseTemplateUploader {
    protected dialog = document.createElement('dialog')
    protected descriptionArea = document.createElement('div')
    protected btnGroup = document.createElement('div')
    protected cancelButton = document.createElement('button')
    protected nextButton = document.createElement('button')

    constructor() {
        super()

        this.cancelButton.innerHTML = 'Cancel'
        this.cancelButton.addEventListener('click', () => {
            this.dialog.close()
            throw new Error('Cancel clicked')
        })
        this.nextButton.innerHTML = 'Next'

        this.btnGroup.append(this.cancelButton, this.nextButton)

        this.dialog.append(
            this.descriptionArea,
            this.btnGroup
        )
        document.body.appendChild(this.dialog)
    }

    protected async init(): Promise<void> {
        if (config.access_token && config.full_name) return super.init()
        this.dialog.showModal()
        return new Promise(res => {
            this.nextButton.addEventListener('click', async () => {
                const loading = new Loading(this.dialog).show()
                await super.init()
                loading.hide()
                showMessage('初始化完成')
                this.dialog.close()
                res()
            }, {once: true})
        }) as Promise<void>
    }

    async update(key: string, template: PetpetTemplate, frames: HTMLCanvasElement[]): Promise<void> {
        if (!config.access_token || !config.full_name) {
            await (this.initPromise = this.init())
        }
        return super.update(key, template, frames)
    }
}