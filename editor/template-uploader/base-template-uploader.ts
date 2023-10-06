import {PetpetTemplate} from "../../src/core"
import './loginDialog.css'
import {CLIENT_ID, GITHUB_API_URL, OAUTH_PROXY_URL, REDICRECT_URI, TEMPLATE_REPO, TEMPLATE_REPO_NAME} from "./config"
import {config} from '../../src/app/loader'
import {buildZip} from "../util/build-zip";

console.log(config)

export default class BaseTemplateUploader {
    protected bc = new BroadcastChannel('code_channel')

    protected initPromise: Promise<unknown>

    protected async getOAuthCode(): Promise<string> {
        window.open(
            `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDICRECT_URI}&scope=user repo`,
            '_blank'
        )

        return new Promise(res => this.bc.addEventListener(
            'message', e => res(e.data),
            {once: true}
        ))
    }

    protected async init() {
        if (!config.access_token) {
            const code = await this.getOAuthCode()
            await this.getToken(code)
        }

        await this.forkRepo()
    }

    public async update(key: string, template: PetpetTemplate, frames: HTMLCanvasElement[]) {
        await (this.initPromise ??= this.init())

        const zip = await buildZip(key, template, frames)
        const blob = await zip.generateAsync({type: 'base64'})

        return await this.uploadFile(key, blob)
    }

    get githubHeaders(): HeadersInit {
        if (!config.access_token) throw new Error('no github access_token')
        return {
            'Authorization': `Bearer ${config.access_token}`,
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }

    protected async getToken(code?: string): Promise<string> {
        if (config.access_token) return config.access_token
        if (!code) throw new Error('Can not get token: No code')

        const response = await fetch(`${OAUTH_PROXY_URL}?code=${code}`);

        if (response.status !== 200) {
            throw new Error('Failed to fetch token')
        }

        const data = await response.json()
        return config.access_token = data.access_token
    }

    protected async forkRepo(): Promise<string> {
        if (config.full_name) return config.full_name

        const forkRes = await fetch(`${GITHUB_API_URL}/repos/${TEMPLATE_REPO}/generate`, {
            method: 'post',
            headers: this.githubHeaders,
            body: JSON.stringify({
                name: 'petpet-data',
                description: 'Automatically created by the Petpet-js Editor',
            })
        })

        if (forkRes.status === 422) {
            console.log('data repository has been created')
            const userName = await this.getUserName()
            return config.full_name = `${userName}/${TEMPLATE_REPO_NAME}`
        }

        if (!forkRes.ok) throw new Error('can not forks repos')

        const repoInfo = await forkRes.json()
        return config.full_name = repoInfo.full_name
    }

    protected async getUserName(): Promise<string> {
        if (config.owner) return config.owner

        const response = await fetch(`${GITHUB_API_URL}/user`, {
            headers: this.githubHeaders
        })

        if (!response.ok) {
            throw new Error('Failed to fetch user data.');
        }

        const userData = await response.json()
        return config.owner = userData.login as string
    }

    protected async uploadFile(name: string, base64: string) {
        const filePath = `data/${name}`

        const uploadContent = {
            message: `Upload: ${filePath}`,
            content: base64
        }

        // try {
        const response = await fetch(`${GITHUB_API_URL}/repos/${config.full_name}/contents/unzip/${name}.zip`, {
            method: 'put',
            headers: this.githubHeaders,
            body: JSON.stringify(uploadContent)
        });

        if (![200, 201].includes(response.status)) {
            throw new Error('Can not upload the same files');
        }

        const responseData = await response.json()
    }

}