//@ts-ignore
import readmeHtml from '../../../readme.html?url'
import './readme-dialog.css'

export function showReadme() {
    const dialog = document.createElement('dialog')
    dialog.classList.add('readme')
    const iframe = document.createElement('iframe')
    iframe.src = readmeHtml

    const closeButton = document.createElement('div')
    closeButton.classList.add('button-group')
    closeButton.addEventListener('click', () => {
        dialog.close()
        localStorage.setItem('readme', 'true')
    })
    closeButton.innerHTML = '<div>OK</div>'


    dialog.append(iframe, closeButton)
    document.body.appendChild(dialog)
    dialog.showModal()
}
window['showReadme'] = showReadme

export function initReadme() {
    if (localStorage.getItem('readme')) return
    showReadme()
}