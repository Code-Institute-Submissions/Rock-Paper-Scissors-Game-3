let selectionButtons = document.querySelectorAll('[data-selection')


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        let selectionName = selectionButton.dataset.selection
    })
})