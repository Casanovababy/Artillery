const valKnappar = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const cpuScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const VALEN = [
  {
    name: 'rock',
    emoji: '⛰️',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '🧻',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✂️',
    beats: 'paper'
  }
]

function makeSelection(val) {
  const cpuVal = randomSelection()
  const yourWinner = isWinner(val, cpuVal)
  const cpuWinner = isWinner(cpuVal, val)

  addSelectionResult(cpuVal, cpuWinner)
  addSelectionResult(val, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (cpuWinner) incrementScore(cpuScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(val, winner) {
  const div = document.createElement('div')
  div.innerText = val.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

valKnappar.forEach(valKnapp => {
  valKnapp.addEventListener('click', e => {
    const valNamn = valKnapp.dataset.selection
    const val = VALEN.find(val => val.name === valNamn)
    makeSelection(val)
  })
})

function isWinner(val, opponentSelection) {
  return val.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * VALEN.length)
  return VALEN[randomIndex]
}
