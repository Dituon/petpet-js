export const INDEX_FILE = 'index.json'
export const DEFAULT_DATA_PATH = '/data/xmmt.dituon.petpet'
export const DEFAULT_PREVIEW_PATH = '/preview'

export interface RepoIndex {
    version: number
    dataPath?: string
    previewPath?: string
    dataList: string[]
    fontList: string[]
}

export class RepoLoader {
    private urls: string[]
    private urlSet: Set<string> = new Set()
    private readonly initPromise: Promise<void>
    private idMap: Map<string, string>
    private fonts: string[]

    constructor(urls) {
        this.urls = urls
        this.initPromise = this.init()
    }

    private async init() {
        const idMap: Map<string, string> = new Map()
        const fontMap: Map<string, string> = new Map()

        await Promise.all(this.urls.map(async url => {
            const index = await fetch(`${url}/${INDEX_FILE}`).then(p => p.json())
            const {dataPath = DEFAULT_DATA_PATH, dataList, fontList} = index as RepoIndex

            for (const id of dataList) {
                if (idMap.has(id)) continue
                idMap.set(id, `${url}${dataPath}/${id}`)
            }
            for (const font of fontList) {
                if (fontMap.has(font)) continue
                fontMap.set(font, `${url}${dataPath}/fonts/${font}`)
            }
            this.urlSet.add(url)
        }))

        this.idMap = idMap
        this.fonts = [...fontMap.values()]
    }

    async getIdMap() {
        await this.initPromise
        return this.idMap
    }

    async getFonts() {
        await this.initPromise
        return this.fonts
    }

    async getUrlSet(){
        await this.initPromise
        return this.urlSet
    }
}