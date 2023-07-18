import {Expression, Parser} from "expr-eval";
import {getColor, getImageFromBlob} from "../utils/utils";

export interface BackgroundTemplate {
    size: [(string | number), (string | number)]
    color?: string | number[]
}

export const MAX_CONCURRENT_REQUESTS = 6

export class BackgroundModel {
    private hasTemplate: boolean = false
    protected width: Expression | number
    protected height: Expression | number
    protected color: string
    protected frames: HTMLImageElement[] | HTMLCanvasElement[]
    private loadingPromise: Promise<unknown | void>

    constructor(template?: BackgroundTemplate) {
        if (!template) return
        [this.width, this.height] = template.size.map(e =>
            typeof e === 'number' ? e : Parser.parse(e as string)
        )
        this.color = getColor(this.color)
        this.hasTemplate = true
    }

    setUrl(url: string, length?: number) {
        this.loadingPromise = BackgroundModel.fetchImages(url, length).then(imgs => this.frames = imgs)
    }

    set images(imgs) {
        this.frames = imgs
    }

    async generate(sizeMap: { [key: string]: number }): Promise<HTMLCanvasElement[] | HTMLImageElement[]> {
        await this.loadingPromise

        if (this.frames) {
            if (!this.hasTemplate) {
                return this.frames
            }

            return this.frames.map(bg => {
                const ctx = this.getCtx(sizeMap)
                ctx.drawImage(bg, 0, 0)
                return ctx.canvas
            })
        }

        if (this.hasTemplate) return [this.getCtx(sizeMap).canvas]

        throw new Error('can not load background')
    }

    private getCtx(sizeMap: { [key: string]: number }) {
        const canvas = document.createElement('canvas')
        const evalExpression = e => typeof e === 'number' ? e : (e as Expression).evaluate(sizeMap)
        canvas.width = evalExpression(this.width)
        canvas.height = evalExpression(this.height)

        const ctx = canvas.getContext('2d')

        ctx.fillStyle = this.color
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        return ctx
    }

    static async fetchImages(baseUrl, length?: number): Promise<HTMLImageElement[]> {
        if (length !== undefined) {
            if (length <= 0) return []

            const promises: Promise<HTMLImageElement>[] = []
            for (let i = 0; i < length; i++) {
                promises.push(
                    fetch(`${baseUrl}/${i}.png`)
                        .then(p => p.blob())
                        .then(getImageFromBlob)
                )
            }
            return Promise.all(promises)
        }

        let hasError = false

        let queue: Set<Promise<void>> = new Set()
        const result: HTMLImageElement[] = []

        let i = 0
        while (!hasError) {
            if (queue.size >= MAX_CONCURRENT_REQUESTS) await Promise.race(queue)

            const fi = i++
            const request = fetch(`${baseUrl}/${fi}.png`)
                .then(p => p.blob())
                .then(getImageFromBlob)
                .then(img => {
                    result[fi] = img
                })
                .catch(() => hasError = true)
            const completionPromise = request.then(() => queue.delete(completionPromise))

            queue.add(completionPromise)
        }

        await Promise.all(queue)
        return result
    }
}

