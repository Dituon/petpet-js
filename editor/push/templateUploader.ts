import {PetpetTemplate} from "../../src/core"
import './loginDialog.css'
import {CLIENT_ID, GITHUB_API_URL, OAUTH_PROXY_URL, REDICRECT_URI} from "./config"
import {config} from '../../src/app/loader/config-loader'
import JSZip from "jszip"

export default class TemplateUploader {
    protected confirmDialog = document.createElement('dialog')
    protected wrap = document.createElement('div')
    protected loginHeader = document.createElement('div')
    protected confirmButton = document.createElement('button')
    protected closeButton = document.createElement('button')
    protected bc = new BroadcastChannel('code_channel')
    protected key: string
    protected PetPetTemplate: PetpetTemplate
    protected frames: HTMLCanvasElement[]

    constructor() {
        console.log('templateUploader constructoring')
        this.init()
        this.initDialogAttribution() // 将dialog挂载到document下
    }

    private init() {
        // bc 用于用户登录后的逻辑
        this.bc.addEventListener('message', async (ev) => {
            console.log('received data: ', ev.data)
            config.code = ev.data
            await this.fetchToken()
        })
    }

    public setInfo(key: string, template: PetpetTemplate, frames: HTMLCanvasElement[]) {
        this.key = key
        this.PetPetTemplate = template
        this.frames = frames
    }

    private initDialogAttribution() {
        this.confirmDialog.classList.add('confirm-dialog')
        this.wrap.classList.add('dialog-wrap')
        this.loginHeader.classList.add('dialog-header')
        this.confirmButton.classList.add('dialog-button')
        this.closeButton.classList.add('dialog-button')

        this.wrap.append(this.loginHeader, this.confirmButton, this.closeButton)
        this.confirmDialog.append(this.wrap)
        document.body.appendChild(this.confirmDialog)

        this.handleClickLogin = this.handleClickLogin.bind(this)
        this.handleCancelLogin = this.handleCancelLogin.bind(this)
        this.handleClickFork = this.handleClickFork.bind(this)
        this.confirmButton.addEventListener('click', this.handleClickLogin)
        this.closeButton.addEventListener('click', this.handleCancelLogin)

        this.initLoginDialog()
    }

    private initLoginDialog() {
        this.loginHeader.innerHTML = '<h2>上传前请先登录</h2>'
        this.confirmButton.innerHTML = '<div>登录</div>'
        this.closeButton.innerHTML = '<div>关闭</div>'

        this.confirmButton.disabled = false
        this.closeButton.disabled = false
    }

    private initLoadingDialog() {
        this.confirmButton.disabled = true
        this.closeButton.disabled = true
        this.loginHeader.innerHTML = '<h2>加载中, 请稍后...</h2>'
    }


    private initForkDialog() {
        this.confirmButton.removeEventListener('click', this.handleClickLogin)
        this.confirmButton.addEventListener('click', this.handleClickFork)
        this.confirmButton.disabled = false
        this.closeButton.disabled = false
        this.loginHeader.innerHTML = '<h2>确认fork？</h2>'
        this.confirmButton.innerHTML = '<div>确认</div>'
    }

    public handleShowLogin() {
        if (config.code) this.initForkDialog()
        this.confirmDialog.showModal()
    }

    private handleCancelLogin() {
        this.confirmDialog.close()
    }

    private handleFailedAuth() {
        this.initLoginDialog()
        config.code = null
        config.access_token = null
    }

    private handleFailedUpload() {
        this.loginHeader.innerHTML = '<h2>上传失败, 请稍后重试！</h2>'
    }

    private handleSuccessUpload() {
        this.loginHeader.innerHTML = '<h2>上传成功！</h2>'
    }

    private async handleClickLogin() {
        config.code ? await this.fetchToken()
            : window.open(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDICRECT_URI}&scope=user repo`, '_blank')

    }

    private async handleClickFork() {
        this.initLoadingDialog()
        await this.forkRepo()
    }

    private async fetchToken() {
        if (config.access_token) {
            this.initForkDialog()
            return
        }

        this.initLoadingDialog()
        const code = config.code
        await fetch(`${OAUTH_PROXY_URL}?code=${code}`)
            .then(res => {
                if (res.status !== 200) throw new Error(`failed to fetch token`)
                return res.json()
            })
            .then(async res => {
                this.initForkDialog()
                config.access_token = res.access_token || config.access_token
            })
            .catch(err => this.handleFailedAuth())

    }

    private async forkRepo() {
        const data = {
            owner: 'Dituon',
            repo: 'petpet-data',
            name: 'petpet-data',
            default_branch_only: true,
        }

        await fetch(`https://api.github.com/repos/Dituon/petpet-data/forks`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${config.access_token}`,
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status !== 202) throw new Error("can't forks repos")
                return res.json()
            })
            .then(res => {
                config.full_name = res.full_name
                this.handleUpload()
            }).catch((err) => this.handleFailedAuth())

    }

    private async uploadFile(file: string) {
        const filePath = `data/${this.key}`

        const uploadContent = {
            message: `upload ${filePath}`,
            content: file
        }

        await fetch(`${GITHUB_API_URL}/repos/${config.full_name}/contents/unzip/${this.key}.zip`,
            {
                method: 'put',
                headers: {'Authorization': `Bearer ${config.access_token}`},
                body: JSON.stringify(uploadContent)
            }
        )
            .then(res => {
                if (![200, 201].includes(res.status)) throw new Error(`can't upload the same files`)
                return res.json()
            })
            .then(res => this.handleSuccessUpload())
            .catch(err => this.handleFailedUpload()).finally(() => {
                setTimeout(() => {
                    this.handleCancelLogin()
                    this.initLoginDialog()
                }, 5000)
            })
    }

    // 预上传处理
    private async handleUpload() {

        const imgZip = new JSZip()
        const root = imgZip.folder(this.key)

        let i = 0
        for (let frame of this.frames) {
            //@ts-ignore
            root.file(`${i++}.png`, await new Promise(res => frame.toBlob(res)))
        }

        root.file('data.json', JSON.stringify(this.PetPetTemplate))
        const blob = await imgZip.generateAsync({type: 'base64'})

        await this.uploadFile(blob)
    }

    
}