const defaultConfig = {
    server: [
        window.location.origin + window.location.pathname,
        'https://d2n.moe/petpet-js',
        'https://d2n.moe/petpet'
    ],
    alternateFont: [
        'MiSans-Bold',
        'sans-serif'
    ].join(',')
}

export default defaultConfig

// function getConfig() {
//     let config = {
//         ...defaultConfig,
//         ...(JSON.parse(localStorage.getItem('config')) || {})
//     }
//
//     function saveConfigToLocalStorage() {
//         localStorage.setItem('config', JSON.stringify(config))
//     }
//
//     config = new Proxy(config, {
//         set(target, prop, value) {
//             if (Array.isArray(target[prop])) {
//                 target[prop] = new Proxy(value, {
//                     set(arrTarget, arrProp, arrValue) {
//                         arrTarget[arrProp] = arrValue
//                         saveConfigToLocalStorage()
//                         return true
//                     },
//                     deleteProperty(arrTarget, arrProp) {
//                         arrTarget.splice(arrProp, 1)
//                         saveConfigToLocalStorage()
//                         return true
//                     }
//                 })
//             } else {
//                 target[prop] = value
//             }
//
//             saveConfigToLocalStorage()
//             return true
//         }
//     })
//
//     return config
// }