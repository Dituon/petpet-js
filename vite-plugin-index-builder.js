import fs from 'fs/promises'
import path from 'path'

const fontsPathName = 'fonts'

const rootDir = process.cwd()

async function listDirectories(dir) {
    const dirents = await fs.readdir(dir, {withFileTypes: true})
    return dirents
        .filter(dirent => dirent.isDirectory() && dirent.name !== fontsPathName)
        .map(dirent => dirent.name)
}

async function listFiles(dir) {
    const dirents = await fs.readdir(dir, {withFileTypes: true})
    return dirents
        .filter(dirent => dirent.isFile() && dirent.name.endsWith('.png'))
        .map(dirent => dirent.name)
}

async function readJsonFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8')
        return JSON.parse(content)
    } catch (err) {
        return {}
    }
}

export default function buildDataIndex(dataPath) {
    return {
        name: 'build-data-index',
        apply: 'build',
        async generateBundle(_, bundle) {
            const dataSubDirs = await listDirectories(path.join(rootDir, dataPath))
            const dataTemplateNames = dataSubDirs

            let fontsNames = []
            const fontsDirPath = path.join(rootDir, dataPath, fontsPathName)
            try {
                await fs.access(fontsDirPath)
                fontsNames = await listFiles(fontsDirPath)
            } catch (e) {
            }

            const jsonData = {
                version: 0.1,
                dataList: dataTemplateNames,
                fontList: fontsNames
            }
            await fs.writeFile(path.join(rootDir, 'index.json'), JSON.stringify(jsonData, null, 4))

            const lengthIndex = {}
            const aliasIndex = {}
            const typeIndex = {}

            for (const dir of dataSubDirs) {
                if (dir !== fontsPathName) {
                    const dirPath = path.join(rootDir, dataPath, dir)
                    const files = await listFiles(dirPath)
                    lengthIndex[dir] = files.length

                    const dataJsonFile = path.join(rootDir, dataPath, dir, 'data.json')
                    const dataJson = await readJsonFile(dataJsonFile)
                    aliasIndex[dir] = dataJson.alias || []
                    typeIndex[dir] = dataJson.type || 'Unknown'
                }
            }

            const indexMapJsonData = JSON.stringify({
                length: lengthIndex,
                alias: aliasIndex,
                type: typeIndex
            })

            await fs.writeFile(path.join(rootDir, 'index.map.json'), indexMapJsonData)
        }
    }
}
