import {parseGIF, decompressFrames, ParsedFrame, ParsedGif} from "gifuct-js";

export function decodeGifUseGifuct(arrayBuffer: ArrayBuffer): HTMLCanvasElement[] {
    const gif: ParsedGif = parseGIF(arrayBuffer)
    const frames: ParsedFrame[] = decompressFrames(gif, true)

    const canvasArray: HTMLCanvasElement[] = []

    for (let frame of frames) {
        const {width, height, left, top} = frame.dims

        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height

        ctx.putImageData(new ImageData(frame.patch, width, height), left, top)
        canvasArray.push(canvas)
    }

    return canvasArray
}