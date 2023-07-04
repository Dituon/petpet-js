export function createTitle(str, type='h3'){
    const h3 = document.createElement(type)
    h3.textContent = str
    return h3
}