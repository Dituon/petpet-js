import {copyAsCanvas} from "../../utils/utils";

export async function decodeGifUseWebcodecs(arrayBuffer: ArrayBuffer): Promise<HTMLCanvasElement[]> {
    const imageDecoder = new ImageDecoder({
        data: arrayBuffer,
        type: 'image/gif'
    })

    await imageDecoder.tracks.ready
    await imageDecoder.completed

    const frameCount = imageDecoder.tracks.selectedTrack.frameCount

    const frames: HTMLCanvasElement[] = []
    for (let frameIndex = 0; frameIndex < frameCount; frameIndex++) {
        const result = (await imageDecoder.decode({frameIndex})).image
        result.width = result.codedWidth
        result.height = result.codedHeight
        frames.push(copyAsCanvas(result))
        result.close()
    }

    return frames
}