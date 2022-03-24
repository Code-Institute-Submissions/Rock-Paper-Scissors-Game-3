/**
 * Declare lets for DOM elements
 * and SELECTIONS
 */
let selectionButtons = document.querySelectorAll('[data-selection]');
let finalColumn = document.querySelector('[data-final-column]');
let computerScoreSpan = document.querySelector('[data-computer-score]');
let yourScoreSpan = document.querySelector('[data-your-score]');
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
    emoji: '✌',
    beats: 'paper'
  }
];

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    let selectionName = selectionButton.dataset.selection;
    let selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeSelection(selection);
  });
});
/**
 * This function allows the user to select either Rock, Paper or Scissors.
 */
function makeSelection(selection) {
    let computerSelection = randomSelection();
    let yourWinner = isWinner(selection, computerSelection);
    let computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan); /* This if statment increments the score when the user is the winner.*/
  if (computerWinner) incrementScore(computerScoreSpan); /* This if statment increments the score when the computer is the winner.*/
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    let div = document.createElement('div');
  div.innerText = selection.emoji;
  div.classList.add('result-selection');
  if (winner) div.classList.add('winner');
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
    let randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}