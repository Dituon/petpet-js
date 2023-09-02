const scriptUrl = new URL(document.currentScript.src)
const rootUrl = scriptUrl.origin + scriptUrl.pathname

const cssText = `
.petpet-iframe {
    position: fixed;
    width: min(100%, 24em);
    height: 100vh;
    top: 0;
    right: 0;
    border: 0;
    border-left: 1px dashed;
    transition: right 1s;
    z-index: 9998;
}
.petpet-logo {
    position: fixed;
    right: 0;
    top: 0;
    cursor: pointer;
    background: url(${new URL('./icons/icon-128x128.png', rootUrl)}) center/100%;
    width: 3.6em;
    height: 3.6em;
    z-index: 9999;
}
.petpet-iframe.petpet-hide {
    right: -24.2em;
}
`
const iframeUrl =  new URL('./index.html', rootUrl).toString()
console.log(iframeUrl)

const style = document.createElement('style')
style.innerText = cssText
document.head.appendChild(style)

const iframe = document.createElement('iframe')
iframe.classList.add('petpet-iframe', 'petpet-hide')
iframe.src = iframeUrl

const logo = document.createElement('div')
logo.classList.add('petpet-logo')
logo.addEventListener('click', () => {
    iframe.classList.toggle('petpet-hide')
})
document.body.appendChild(logo)
document.body.appendChild(iframe)
