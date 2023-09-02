const scriptUrl = new URL(document.currentScript.src)
const rootUrl = scriptUrl.origin + scriptUrl.pathname

const cssText = `
:root {
    --petpet-icon-size-def: 3.6em;
    --petpet-body-width-def: 28em;
}
.petpet-iframe {
    position: fixed;
    width: min(100%, var(--petpet-body-width, var(--petpet-body-width-def)));
    height: 100vh;
    top: 0;
    right: 0;
    border: 0;
    border-left: 1px dashed;
    transition: right 1s;
    z-index: 9998;
}
.petpet-icon {
    position: fixed;
    right: var(--petpet-icon-right, 0);
    top: var(--petpet-icon-top, 0);
    cursor: pointer;
    background: url(${new URL('./icons/icon-128x128.png', rootUrl)}) center/100%;
    width: var(--petpet-icon-size, var(--petpet-icon-size-def));
    height: var(--petpet-icon-size, var(--petpet-icon-size-def));
    z-index: 9999;
}
.petpet-iframe.petpet-hide {
    right: calc(var(--petpet-body-width, var(--petpet-body-width-def)) * -1 - 4px);
}
`

const style = document.createElement('style')
style.innerText = cssText
document.head.appendChild(style)

const iframe = document.createElement('iframe')

iframe.classList.add('petpet-iframe', 'petpet-hide');
iframe.src = new URL('./index.html', rootUrl).toString()

const logo = document.createElement('div')
logo.classList.add('petpet-icon')
logo.addEventListener('click', () => {
    iframe.classList.toggle('petpet-hide')
})
document.body.appendChild(logo)
document.body.appendChild(iframe)
