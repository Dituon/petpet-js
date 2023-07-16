import {PetpetModelViewer} from "../../core/model/petpet-model";
import {encodeGif, gifSetting} from "../../core/gif-synthesis/encoder";
import {Setting} from "../setting/setting";

export class Downloader {
    private readonly initPromise
    private readonly viewer: PetpetModelViewer
    private frames: HTMLCanvasElement[]

    constructor(viewer: PetpetModelViewer) {
        this.viewer = viewer
        this.initPromise = this.init()
    }

    private async init() {
        this.frames = await this.viewer.getFrames()
    }

    async renderAsync() {
        await this.initPromise
        const ele = document.createElement('div')
        if (this.frames.length !== 1){
            const gifBuilderSetting = new Setting(gifSetting)
            ele.appendChild(gifBuilderSetting.render())
        }
        const downloadSetting = new Setting({
            download: async () => await this.download()
        })
        ele.append(downloadSetting.render())
        return ele
    }

    async download() {
        if (!this.frames) return
        if (this.frames.length === 1) {
            const fileName = `${this.viewer.template.key}.png`
            Downloader.downloadBlob(
                await new Promise(res => this.frames[0].toBlob(blob => res(blob))),
                fileName
            )
            return
        }
        const delay = this.viewer.delay
        const blob = await encodeGif(
            delay > 0 ? this.frames : this.frames.reverse(),
            Math.abs(delay) || 65
        )
        const fileName = `${this.viewer.template.key}.gif`
        Downloader.downloadBlob(blob, fileName)
    }

    static downloadBlob(blob: Blob, fileName: string) {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        document.body.appendChild(link);
        link.click()
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}