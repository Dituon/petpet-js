import {PetpetModelViewer} from "../../core/model/petpet-model";
import {encodeGif, gifSetting} from "../../core/gif-synthesis/encoder";
import {Setting} from "../setting/setting";

export enum SupportType{
    PNG = 'image/png',
    GIF = 'image/gif',
    WEBM = 'video/webm',
    // PSD = 'image/vnd.adobe.photoshop'
}

interface DownloadOptions {
    // type: SupportType
    download: () => Promise<void>
    copy: () => Promise<void>
    share: () => Promise<void>
}

interface DownloadFile {
    blob: Blob,
    fileName: string
}

export class Downloader {
    private readonly initPromise
    private readonly viewer: PetpetModelViewer
    private frames: HTMLCanvasElement[]
    private cache: DownloadFile
    private prevFramesCache: HTMLCanvasElement[]
    private downloadOptions: DownloadOptions = {
        // type: frames.length === 1 ? SupportType.PNG : SupportType.GIF,
        download: async () => await this.download(),
        copy: async () => await this.copy(),
        share: async () => await this.share()
    }

    constructor(viewer: PetpetModelViewer) {
        this.viewer = viewer
        this.initPromise = this.init()
    }

    private async init() {
        this.frames = await this.viewer.getFrames()
    }

    private async getTextFrames() {
        return await this.viewer.getTextedFrames()
    }

    async renderAsync() {
        await this.initPromise
        const ele = document.createElement('div')
        if (this.frames.length !== 1) {
            const gifBuilderSetting = new Setting(gifSetting,
                {
                    quality: {
                        type: 'range',
                        min: '1',
                        max: '20',
                        className: 'reversed'
                    }
                },
                'GIF Render'
            )
            ele.appendChild(gifBuilderSetting.render())
        }
        const downloadSetting = new Setting(this.downloadOptions as any, undefined, 'Save & Share')
        ele.append(downloadSetting.render())
        return ele
    }

    protected async getOptions() {
        await this.initPromise

        const frames = await this.getTextFrames()
        if (this.cache && this.prevFramesCache === frames) return this.cache
        if (!this.frames) return

        this.prevFramesCache = frames
        if (frames.length === 1) {
            this.cache = {
                blob: await new Promise(res => frames[0].toBlob(blob => res(blob))),
                fileName: `${this.viewer.template.key}.png`
            }
            return this.cache
        }
        const delay = this.viewer.delay
        this.cache = {
            blob: await encodeGif(
                delay > 0 ? frames : frames.reverse(),
                Math.abs(delay)
            ),
            fileName: `${this.viewer.template.key}.gif`
        }
        return this.cache
    }

    async download() {
        const {blob, fileName} = await this.getOptions()
        Downloader.download(blob, fileName)
    }

    async copy() {
        const {blob} = await this.getOptions()
        if (this.frames.length === 1) {
            await Downloader.copy(blob)
            return
        }
        const url = URL.createObjectURL(blob)
        const wf = `width=${this.frames[0].width}, height=${this.frames[0].height}`
        window.open(url, undefined, wf)
        URL.revokeObjectURL(url)
    }

    async share() {
        const {blob, fileName} = await this.getOptions()
        const file = new File([blob], fileName, {type: blob.type})
        await navigator.share({
            url: document.location.href,
            title: fileName,
            files: [file]
        })
    }

    static download(blob: Blob, fileName?: string) {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    static async copy(blob: Blob) {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob
                })
            ])
        } catch (e) {
            console.error(e, e.message)
        }
    }
}