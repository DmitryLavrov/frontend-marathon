const colors = [
  '#77E', '#7E7', '#E77', '#7EE', '#EE7', '#E7E',
  '#AAE', '#AEA', '#EAA', '#AEE', '#EEA', '#EAE',
]

const startBtn = document.getElementById('start')
const screens = document.querySelectorAll('.screen')
const timeLst = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeLst.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
  }
  screens[1].classList.add('up')
  startGame()
})

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    if (!board.hasChildNodes()) {
      createRandomCircles()
    }
  }
})

function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomCircles()
  renderTime()
}

function finishGame() {
  // timeEl.parentNode.remove()
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function decreaseTime() {
  renderTime()
  if (time === 0) {
    finishGame()
  }
}

function renderTime() {
  const timeStr = `${time > 9 ? '' : '0'}${time}`
  timeEl.innerHTML = `00:${timeStr}`
  time--
}

function createRandomCircles() {
  createRandomCircle()
  createRandomCircle()
  createRandomCircle()
}

function createRandomCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(size, width - size)
  const y = getRandomNumber(size, height - size)
  const color = colors[getRandomNumber(0, colors.length)]
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.left = `${x}px`
  circle.style.top = `${y}px`
  circle.style.background = color
  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function winTheGame() {
  function kill() {
    const circle = document.querySelector('.circle')
    if (circle) {
      circle.click()
    }
  }
  setInterval(kill, 100)
}