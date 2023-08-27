import {en_US} from './en-US';
import {zh_TW} from './zh-TW';
import {zh_CN} from './zh-CN';
import {de} from './de';
import {ja} from './ja';
import {ko} from './ko';
import {ru} from './ru';
import {fr} from './fr';

export interface LangConfig {
    selectTemplate: string
    uploadAvatar: string
    setText: string
    result: string

    typeToSearch: string

    cancel: string
    save: string

    add: string
    x: string
    y: string
    text: string
    color: string
    size: string
    font: string
    fontStyle: string
    strokeSize: string
    strokeColor: string
    hidden: string
    delete: string

    delay: string
    play: string
    stop: string

    workers: string
    quality: string
    background: string
    dither: string

    download: string
    copy: string
    share: string

    notSelected: string
    noAvatar: string
    rightClickOrLongPress: string
}

export const supportedLangMap = [
    {id: 'zh-CN', text: '简体中文', alias: ['zh']},
    {id: 'zh-TW', text: '繁體中文', alias: ['zh-HK', 'zh-SG']},
    {
        id: 'en-US', text: 'English', alias: [
            'en',
            'en-EG', 'en-AU', 'en-GB', 'en-CA', 'en-NZ',
            'en-IE', 'en-ZA', 'en-JM', 'en-BZ', 'en-TT'
        ]
    },
    {id: 'ru', text: 'русский язык', alias: ['ru-RU']},
    {id: 'de', text: 'Deutsch', alias: ['de-CH', 'de-AT', 'de-LU', 'de-LI']},
    {
        id: 'es', text: 'español', alias: [
            'es-AR', 'es-GT', 'es-CR', 'es-PA', 'es-DO', 'es-MX', 'es-VE', 'es-CO', 'es-PE',
            'es-EC', 'es-CL', 'es-UY', 'es-PY', 'es-BO', 'es-SV', 'es-HN', 'es-NI', 'es-PR'
        ]
    },
    {id: 'fr', text: 'Français', alias: ['fr-BE', 'fr-CA', 'fr-CH', 'fr-LU']},
    // {id: 'id', text: 'bahasa Indonesia', alias: []},
    {id: 'ja', text: '日本語', alias: ['ja-JP']},
    {id: 'ko', text: '한국어', alias: ['ko-KR']},
    // {id: 'vi', text: 'Tiếng Việt', alias: []},
    // {id: 'pt', text: 'Português', alias: []},
    // {id: 'th', text: 'ภาษาไทย', alias: []},
]

let cLang

export function getLangConfig(): LangConfig {
    if (cLang) return cLang

    const windowLang = navigator.language
    let langId = 'en-US'
    for (const lang of supportedLangMap) {
        if (windowLang === lang.id) {
            langId = lang.id
            break
        }
        lang.alias.forEach(alia => {
            if (alia === windowLang) langId = lang.id
        })
    }
    langId = langId.replace('-', '_')
    cLang = supportedLang[langId]
    return supportedLang[langId]
}


export const supportedLang = {en_US, zh_TW, zh_CN, de, fr, ja, ko, ru};
