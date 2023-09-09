import {config, PetpetConfig} from "./config-loader";

export const url = new URL(location.href)

export function setURLParam(name: string, value: string) {
    if (!window.history.replaceState) return
    url.searchParams.set(name, value)
    window.history.replaceState({}, '', url.toString())
}

export const supportedConfigParam: (keyof PetpetConfig)[] = ['lang', 'template', 'server']
for (let configParam of supportedConfigParam) {
    const urlParamValue = url.searchParams.get(configParam)
    if (!urlParamValue) continue
    switch (configParam) {
        case "server":
            config.server.push(...urlParamValue.split(','))
            break
        default:
            config[configParam] = urlParamValue
            break
    }
}