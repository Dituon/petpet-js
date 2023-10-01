import defaultConfig from "../../../config.js";

export interface PetpetConfig {
    server?: string[]
    lang?: string
    template?: string
    code?: string
    access_token?: string
    owner?: string
}

export const supportedConfigParam: (keyof PetpetConfig)[] = ['lang', 'template', 'server']

export const url = new URL(location.href)

export const config = getConfig()

function getConfig(): PetpetConfig & { save: () => void } {
    const {lang, template, server = []} = getURLParam()

    let config = {
        ...defaultConfig,
        ...(JSON.parse(localStorage.getItem('config') || '{}'))
    }
    config.lang = lang ?? config.lang
    config.template = template ?? config.template

    function saveConfigToLocalStorage() {
        localStorage.setItem('config', JSON.stringify(config))
    }

    config.save = saveConfigToLocalStorage
    config.server = [...new Set([...server, ...config.server])]

    config = new Proxy(config, {
        set(target, prop, value) {
            if (Array.isArray(target[prop])) {
                target[prop] = new Proxy(value, {
                    set(arrTarget, arrProp, arrValue) {
                        arrTarget[arrProp] = arrValue
                        saveConfigToLocalStorage()
                        return true
                    },
                    deleteProperty(arrTarget, arrProp) {
                        arrTarget.splice(arrProp, 1)
                        saveConfigToLocalStorage()
                        return true
                    }
                })
            } else {
                target[prop] = value
            }

            saveConfigToLocalStorage()
            return true
        }
    })

    config.save()
    return config
}

export function setURLParam(name: string, value: string) {
    if (!window.history.replaceState) return
    if (!value) {
        url.searchParams.delete(name)
        return
    }
    url.searchParams.set(name, value)
    window.history.replaceState({}, '', url.toString())
}

function getURLParam(): PetpetConfig {
    const config: PetpetConfig = {}
    for (let configParam of supportedConfigParam) {
        const urlParamValue = url.searchParams.get(configParam)
        if (!urlParamValue) continue
        switch (configParam) {
            case "server":
                config.server = urlParamValue.split(',')
                setURLParam('server', undefined)
                break
            default:
                config[configParam] = urlParamValue
                break
        }
    }
    return config
}