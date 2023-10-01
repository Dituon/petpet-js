import {PetpetTemplate} from "../../src/core"
import './loginDialog.css'
import {CLIENT_ID, GITHUB_API_URL, OAUTH_PROXY_URL, REDICRECT_URI} from "./config"
import {config} from '../../src/app/loader/config-loader'
import {anchorWrapper} from "../util/fabric-avatar-util";

export const GH_API_URL = ''

export default class TemplateUploader {
    protected loginDialog = document.createElement('dialog')
    protected confirmDialog = document.createElement('dialog')
    protected wrap = document.createElement('div')
    protected loginHeader = document.createElement('div')
    protected confirmButton = document.createElement('button')
    protected closeButton = document.createElement('button')


    protected bc = new BroadcastChannel('code_channel')
    protected key
    protected PetPetTemplate
    protected frames

    constructor(key: string, template: PetpetTemplate, frames: HTMLCanvasElement[],) {
        console.log('templateUploader constructoring')

        this.key = key
        this.PetPetTemplate = template
        this.frames = frames
        this.init()
        this.initLoginDialog() // 将dialog挂载到document下

        // this.init()
        // this.initPromise = this.init()
        // this.init()
        // // 检查是否有token
        // if (config.userToken) {
        //
        // } else {
        //     // await login
        // }

        // after login
        // if (fork) {
        //     if (hasIndex) {
        //
        //     }
        // }


    }

    private init() {

        this.handleClickLogin = this.handleClickLogin.bind(this)
        this.handleCancelLogin = this.handleCancelLogin.bind(this)
        this.handleClickFork = this.handleClickFork.bind(this)

        // bc 用于用户登录后的逻辑
        this.bc.addEventListener('message', async (ev) => {
            console.log('received data: ', ev.data)
            config.code = ev.data
            await this.fetchToken()
        })

    }

    private initLoginDialog() {

        this.loginDialog.classList.add('login-dialog')
        this.wrap.classList.add('dialog-wrap')
        this.loginHeader.classList.add('dialog-header')
        this.confirmButton.classList.add('dialog-button')
        this.closeButton.classList.add('dialog-button')
        this.wrap.append(this.loginHeader, this.confirmButton, this.closeButton)
        this.loginDialog.append(this.wrap)
        document.body.appendChild(this.loginDialog)

        this.confirmButton.addEventListener('click', this.handleClickLogin)
        this.closeButton.addEventListener('click', this.handleCancelLogin)

        this.loginHeader.innerHTML = '<h2>上传前请先登录</h2>'
        this.confirmButton.innerHTML = '<div>登录</div>'
        this.closeButton.innerHTML = '<div>关闭</div>'

    }


    private initConfirmDialog() {
        this.confirmButton.removeEventListener('click', this.handleClickLogin)
        this.confirmButton.addEventListener('click', this.handleClickFork)
        this.loginHeader.innerHTML = '<h2>确认fork？</h2>'
        this.confirmButton.innerHTML = '<div>确认</div>'
    }

    public handleShowLogin() {
        this.loginDialog.showModal()
    }

    private handleCancelLogin() {
        this.loginDialog.close()
    }

    private handleClickLogin() {
        console.log('click login')
        window.open(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDICRECT_URI}`, '_blank')
    }

    private async handleClickFork() {
        await this.forkRepo()
    }

    private async fetchToken() {
        const code = config.code
        await fetch(`${OAUTH_PROXY_URL}?code=${code}`)
            .then(res => res.json())
            .then(async result => {
                this.initConfirmDialog()
                console.log('result', result.access_token)
                config.access_token = result.access_token

                // await this.fetchOwner()
            })
    }

    private async fetchOwner() {
        console.log('fetch owner')
        fetch(`${GITHUB_API_URL}/user`, {
            headers: {'Authorization': `Bearer ${config.access_token}`}
        })
            .then(res => res.json())
            .then(res => {
                config.owner = res.login
                console.log('fetch owner success', res.login)
            })
    }

    private async forkRepo() {
        const data = {
            owner: 'Dituon',
            repo: 'petpet',
            name: 'petpet',
            default_branch_only: true,
        }

        const body = new FormData()

        for (let dataKey in data) {
            body.append(dataKey, data[dataKey])
        }
        console.log('config.access_token', config.access_token)
        await fetch(`https://api.github.com/repos/Dituon/petpet/forks`, {
            method: 'post',
            headers: {
                // 'accept': '*/*',
                'Authorization': `Bearer ${config.access_token}`,
                // 'X-GitHub-Api-Version': '2022-11-28'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log('fork success', res)
            })
    }

    private async download() {
        // TODO //petpet.d2n.moe
        // const repoLoader = new RepoLoader(config.server)
        // this.backgroundLengthMap = await repoLoader.getLengthMap()
        // this.templateChooser.templates = await repoLoader.getPreviewList()
    }


    private async update(key: string, template: PetpetTemplate, frames: HTMLCanvasElement[]) {
        //if xxx login fork

        const data = new FormData()
        // data.set('img1', blob) // see demo

        /*
        * repo
        *  -data
        *    -ask
        *      -0.png
        *      -1.png
        *      -data.json
        *   -applaud
        * */

        //https://github.com/Dituon/petpet-js/blob/main/index.json
    }


}