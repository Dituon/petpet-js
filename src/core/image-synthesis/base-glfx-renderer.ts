import * as fx from 'glfx-es6'
// see glfx.Texture
export type Texture = any

export class BaseGlfxRenderer {
    protected fxCanvas = fx.canvas()
    protected readonly textureMap: Map<HTMLCanvasElement, Texture>
    protected readonly cache: boolean

    constructor(cache: boolean = true) {
        this.cache = cache
        if (cache) {
            this.textureMap = (window['_petpetTextureCache'] ??= new WeakMap())
        }
    }

    getTexture(image: HTMLCanvasElement): Texture {
        const texture = this.cache && this.textureMap.has(image)
            ? this.textureMap.get(image)
            : this.fxCanvas.texture(image)

        if (this.cache && !this.textureMap.has(image)) {
            this.textureMap.set(image, texture)
        }

        return texture
    }

    destroy() {
        if (!this.cache) return
        for (const [img, texture] of this.textureMap.entries()) {
            this.textureMap.delete(img)
            texture.destroy()
        }
    }
}