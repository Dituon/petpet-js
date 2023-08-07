import {defineConfig} from 'vite'
import {viteStaticCopy} from "vite-plugin-static-copy";
import buildDataIndex from './vite-plugin-index-builder.js'

export default defineConfig({
    base: './',
    build: {
        outDir: './dist'
    },
    plugins: [
        buildDataIndex('./data/moe.d2n.petpet-js'),
        viteStaticCopy({
            targets: [
                {
                    src: './data',
                    dest: './'
                },
                {
                    src: './index.json',
                    dest: './'
                },
                {
                    src: './index.map.json',
                    dest: './'
                }
            ]
        })
    ]
})