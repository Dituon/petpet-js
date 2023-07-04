import * as fx from 'glfx-es6'
// see glfx.Texture
type Texture = any

export class ImageDeformer {
    private fxCanvas = fx.canvas()
    private textureMap: Map<HTMLCanvasElement, Texture> = new Map()
    private readonly cache: boolean

    constructor(cache: boolean = true) {
        this.cache = cache
    }

    draw(ctx: CanvasRenderingContext2D, image: HTMLCanvasElement, pos: number[][]) {
        const texture: Texture = this.cache && this.textureMap.has(image)
            ? this.textureMap.get(image)
            : this.fxCanvas.texture(image)

        if (this.cache && !this.textureMap.has(image)) {
            this.textureMap.set(image, texture)
        }

        let [x1, y1] = pos[0]
        let [x2, y2] = pos[1]
        let [x3, y3] = pos[2]
        let [x4, y4] = pos[3]
        const [xAnchor, yAnchor] = pos[4]

        x1 += xAnchor
        x2 += xAnchor
        x3 += xAnchor
        x4 += xAnchor
        y1 += yAnchor
        y2 += yAnchor
        y3 += yAnchor
        y4 += yAnchor

        const canvas = ctx.canvas

        this.fxCanvas.draw(texture, canvas.width, canvas.height).perspective(
            [0, 0, canvas.width, 0, 0, canvas.height, canvas.width, canvas.height],
            [x1, y1, x4, y4, x2, y2, x3, y3]
        ).update()
        ctx.drawImage(this.fxCanvas, 0, 0)

        if (!this.cache) texture.destroy()
    }

    destroy() {
        if (!this.cache) return
        for (const texture of [...this.textureMap.values()]) {
            texture.destroy()
        }
    }
}

/**
 * @deprecated Use ImageDeformer Class
 */
export function deformImage(ctx: CanvasRenderingContext2D, image: HTMLCanvasElement, pos: number[][]) {
    const deformer = new ImageDeformer()
    deformer.draw(ctx, image, pos)
}