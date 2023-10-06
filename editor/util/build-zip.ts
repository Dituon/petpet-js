import {PetpetTemplate} from "../../src/core";
import JSZip from "jszip";

export async function buildZip(key: string, template: PetpetTemplate, frames: HTMLCanvasElement[]): Promise<JSZip>{
    const zip = new JSZip()
    const root = zip.folder(key)
    let i = 0
    for (let frame of frames) {
        //@ts-ignore
        root.file(`${i++}.png`, await new Promise(res => frame.toBlob(res)))
    }
    root.file('data.json', JSON.stringify(template))
    return zip
}