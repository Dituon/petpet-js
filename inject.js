;(() => {
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

    const icon = document.createElement('div')
    icon.classList.add('petpet-icon')
    document.body.appendChild(icon)
    document.body.appendChild(iframe)


    let isDragging = false
    const offset = {x: 0, y: 0}
    const mPos = {x: 0, y: 0}

    const startDragging = e => {
        isDragging = true
        e.preventDefault()
        const {left, top, width, height} = icon.getBoundingClientRect()
        offset.x = e.clientX - (left + width / 2);
        offset.y = e.clientY - (top + height / 2);
        mPos.x = e.clientX
        mPos.y = e.clientY
    }

    const stopDragging = e => {
        isDragging = false
        icon.style.cursor = 'pointer'
        if (Math.abs(mPos.x - e.clientX) < 10 && Math.abs(mPos.y - e.clientY) < 10) {
            iframe.classList.toggle('petpet-hide')
        }
    }

    const drag = (e) => {
        if (isDragging) {
            icon.style.cursor = 'grabbing'
            icon.style.left = `${e.clientX - offset.x - icon.offsetWidth / 2}px`;
            icon.style.top = `${e.clientY - offset.y - icon.offsetHeight / 2}px`;
        }
    }

    icon.addEventListener('mousedown', startDragging)
    icon.addEventListener('mouseup', stopDragging)
    document.body.addEventListener('mousemove', drag)
})();