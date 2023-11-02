// //@ts-ignore
// import readmeHtml from '../../../readme.html?url'
import {getDialog} from "./ui";

const readmeHtml = './readme.html'
import './readme-dialog.css'

const ID = 'readme-dialog'

export function showReadme() {
    let dialog = document.getElementById(ID) as HTMLDialogElement
    if (dialog){
        dialog.showModal()
        return
    }

    dialog = getDialog()
    dialog.id = ID
    dialog.classList.add('readme')
    const iframe = document.createElement('iframe')
    iframe.src = readmeHtml

    const close = () => {
        dialog.close()
        localStorage.setItem('readme', 'true')
    }

    const closeButton = document.createElement('div')
    closeButton.classList.add('button-group')
    closeButton.addEventListener('click', close)
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