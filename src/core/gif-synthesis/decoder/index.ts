import {decodeGifUseGifuct} from "./gifuct-decoder"
import {decodeGifUseWebcodecs} from "./webcodecs-decoder"

export async function decodeGif(blob: Blob) {
    const arraybuffer = await blob.arrayBuffer()
    // @ts-ignore
    return window.ImageDecoder ? decodeGifUseWebcodecs(arraybuffer) : decodeGifUseGifuct(arraybuffer)
}
