const board = document.querySelector('#board')
const colors = [
  '#77E', '#7E7', '#E77', '#7EE', '#EE7', '#E7E',
  '#AAE', '#AEA', '#EAA', '#AEE', '#EEA', '#EAE',
]

const SQUARES_NUMBER = 1312

for (let i=0; i< SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  board.append(square)

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => offColor(square))

}

const setColor = (item) => {
  const colorNumber = Math.floor(Math.random()*colors.length)
  item.style.background = colors[colorNumber]
  item.style.boxShadow = `0 0 4px #FFF, 0 0 8px #FFF, 0 0 16px #FFF`
}

const offColor = (item) => {
  item.style.background = '#222'
  item.style.boxShadow = `0 0 2px #000`
}
