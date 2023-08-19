import {defineConfig} from 'vite'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import {VitePWA} from 'vite-plugin-pwa'
import buildDataIndex from './vite-plugin-index-builder.js'

export default defineConfig({
    base: './',
    build: {
        outDir: './dist',
        rollupOptions: {
            input: {
                main: './index.html',
                editor: '/editor/index.html',
            }
        }
    },
    plugins: [
        buildDataIndex('./data/moe.d2n.petpet-js'),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'inline',
            manifest: {
                short_name: 'Petpet!',
                name: 'petpet-js',
                icons: [
                    {
                        src: 'icons/icon-72x72.png',
                        sizes: '72x72',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-96x96.png',
                        sizes: '96x96',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-128x128.png',
                        sizes: '128x128',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-152x152.png',
                        sizes: '152x152',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-284x284.png',
                        sizes: '284x284',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ],
                scope: './',
                start_url: './',
                display: 'standalone',
                theme_color: '#ff8ba7',
                background_color: '#faeee7'
            }
        }),
        viteStaticCopy({
            targets: [
                {
                    src: './data',
                    dest: './'
                },
                {
                    src: './icons',
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