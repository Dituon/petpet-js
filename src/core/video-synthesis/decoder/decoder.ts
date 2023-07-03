import {copyAsCanvas} from "../../utils/utils";

export const videoDecoderConfig = {
    frameCount: 0,
    startTime: 0
}

export class VideoDecoder {
    private readonly blob: Blob
    private video: HTMLVideoElement
    private length: number
    private frames: HTMLCanvasElement[]
    private initPromise: Promise<void>

    constructor(blob: Blob, frameCount: number = 1) {
        this.blob = blob
        this.length = frameCount
        this.initPromise = this.init()
    }

    setFrameCount(num: number) {
        this.length = num
        this.initPromise = this.init()
        return this
    }

    private async init() {
        this.frames = []
        const video = document.createElement('video')
        video.src = URL.createObjectURL(this.blob) + '#t=0.0001'

        await new Promise(res => video.addEventListener("loadeddata", res))

        const {startTime} = videoDecoderConfig
        const interval = (this.video.duration - startTime) / this.length

        for (let i = 0; i < this.length; i++) {
            this.video.currentTime = i * interval + startTime
            await new Promise(res => this.video.oncanplay = res)
            this.frames[i] = copyAsCanvas(this.video)
        }
    }

    async getFrames(): Promise<HTMLCanvasElement[]> {
        await this.initPromise
        return this.frames
    }
}

export async function decodeVideo(blob: Blob, frameCount?: number) {
    frameCount = videoDecoderConfig.frameCount || frameCount
    if (frameCount < 0) throw new Error(`video frame count ${frameCount} must >1`)
    const loader = new VideoDecoder(blob, frameCount)
    return loader.getFrames()
}