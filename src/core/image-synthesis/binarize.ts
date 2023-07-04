import {useGL} from "../utils/gl-utils"
// @ts-ignore
import shaderSource from './binarize.glsl?raw'

export function binarizeImage(image: HTMLImageElement | HTMLCanvasElement): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    // const gl = canvas.getContext('webgl')
    //
    // if (gl) return useGL(shaderSource, image, gl)

    const ctx = canvas.getContext('2d')

    const width = image.width
    const height = image.height

    canvas.width = width
    canvas.height = height

    ctx.drawImage(image, 0, 0)

    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        if (r + g + b > 383) {
            data[i] = 255
            data[i + 1] = 255
            data[i + 2] = 255
        } else {
            data[i] = 0
            data[i + 1] = 0
            data[i + 2] = 0
        }
    }

    ctx.putImageData(imageData, 0, 0)
    return canvas
}
