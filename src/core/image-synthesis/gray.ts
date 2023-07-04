import {useGL} from "../utils/gl-utils"
// @ts-ignore
import shaderSource from './gray.glsl?raw'

export function grayImage(image: HTMLImageElement | HTMLCanvasElement): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    // const gl = canvas.getContext('webgl')
    //
    // if (gl) return useGL(shaderSource, image, gl)

    const ctx = canvas.getContext('2d')

    canvas.width = image.width
    canvas.height = image.height

    ctx.drawImage(image, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const gray = (r + g + b) / 3

        data[i] = gray
        data[i + 1] = gray
        data[i + 2] = gray
    }

    ctx.putImageData(imageData, 0, 0)

    return canvas
}
