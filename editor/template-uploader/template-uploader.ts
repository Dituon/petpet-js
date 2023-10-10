import BaseTemplateUploader from "./base-template-uploader";
import {PetpetTemplate} from "../../src/core";
import {config, getLangConfig} from "../../src/app/loader";
import {Loading, showMessage} from "../../src/app/utils";
import readmeHTML from './readme.html?raw'

export class TemplateUploader extends BaseTemplateUploader {
    protected dialog = document.createElement('dialog')
    protected descriptionArea = document.createElement('div')
    protected btnGroup = document.createElement('div')
    protected cancelButton = document.createElement('button')
    protected nextButton = document.createElement('button')

    constructor() {
        super()

        this.dialog.classList.add('readme')
        this.descriptionArea.innerHTML = readmeHTML

        this.cancelButton.innerHTML = getLangConfig().cancel
        this.cancelButton.addEventListener('click', () => {
            this.dialog.close()
            throw new Error('Cancel clicked')
        })
        this.nextButton.innerHTML = 'OK'

        this.btnGroup.classList.add('button-group')
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
            this.nextButton.addEventListener(
                'click',
                async () => {
                    const loading = new Loading(this.dialog).show()
                    await super.init()
                    loading.hide()
                    showMessage('初始化完成')
                    this.dialog.close()
                    res()
                },
                {once: true}
            )
        }) as Promise<void>
    }

    protected async getToken(code?: string): Promise<string> {
        const token = super.getToken(code)
        showMessage('获取 Token 成功')
        return token
    }

    protected async forkRepo(): Promise<string> {
        const fork = super.forkRepo()
        showMessage('创建仓库成功')
        return fork
    }

    async update(key: string, template: PetpetTemplate, frames: HTMLCanvasElement[]): Promise<void> {
        if (!config.access_token || !config.full_name) {
            await (this.initPromise = this.init())
        }
        const update = super.update(key, template, frames)
        showMessage('上传模板成功')
        return update
    }
}