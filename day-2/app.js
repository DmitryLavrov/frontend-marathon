const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

items.forEach(item => {
  item.addEventListener('dragstart', dragstart)
  item.addEventListener('dragend', dragend)
})

let currentItem, currentPlaceholder

function dragstart(event) {
  currentItem = findNumber(items, event.target)
  console.log('currentItem:', currentItem)
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
  currentItem = undefined
  event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
  event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add('hovered')
}

function dragleave(event) {
  currentPlaceholder = findNumber(placeholders, event.target)
  console.log('currentPlaceholder:', currentPlaceholder)
  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(items[currentItem])
  // event.target.removeChild()
  // placeholders[currentPlaceholder].append(items[currentItem])
}

function findNumber(items, item) {
  let i = 0, len = items.length
  for (; i <len; i++){
    if (items[i] === item) break
  }
  return i
}
