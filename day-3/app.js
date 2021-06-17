const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${slidesCount - 1}00vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

document.addEventListener('keydown',(event) => {
  if (event.key === 'ArrowUp') changeSlide('up')
  else if (event.key === 'ArrowDown') changeSlide('down')
})

function changeSlide(direction) {
  switch (direction) {
    case 'up':
      activeSlideIndex++
      if (activeSlideIndex === slidesCount) activeSlideIndex = 0
      break
    case 'down':
      activeSlideIndex--
      if (activeSlideIndex === -1) activeSlideIndex = slidesCount - 1
      break
  }

  const containerHeight = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * containerHeight}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * containerHeight}px)`
}
