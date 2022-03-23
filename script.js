let selectionButtons = document.querySelectorAll('[data-selection')
let finalColumn = document.querySelector('[data-final-column]')
let computerScoreSpan = document.querySelector('[data-computer-score]')
let yourScoreSpan = document.querySelector('[data-your-score]')
let SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        let selectionName = selectionButton.dataset.selection
        let selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    let computerSelection = randomSelection()
    let yourWinner = isWinner(selection, computerSelection)
    let computerWinner = isWinner(computerSelection, selection)
    

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incermentScore(yourScoreSpan)
    if (computerWinner) incermentScore(computerScoreSpan)
}

function incermentScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
}

function addSelectionResult(selection, winner) {
    let div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    let randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}