let cards = document.querySelector('.card')
let count = 0
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12, 1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12];
arr = shuffle(arr);
arr.map((item) => {
  cards.insertAdjacentHTML('afterbegin', `<div class="card-block" id="${item}" data-opened = false>
  <div class="card-block-view">
      <img src="images/codepen-logo.png" id="${item}">
  </div>
  <div class="card-block-back">
      <img src="images/${item}.png">
  </div>
</div>`)
})

let cardBlock = document.querySelectorAll('.card-block')
let cardArr = Array.prototype.slice.call(cardBlock)
let newarr = []
let doublecard = []
let countTrue = 0

cards.addEventListener('click', (event) => {
  event.target.closest(".card-block").classList.add("active")
  count++
  doublecard.push(event.target.closest(".card-block"))
  if (count == 2) {
    if (doublecard[0].id == doublecard[1].id) {
      newarr.push(doublecard[0], doublecard[1])
      console.log(newarr);
      doublecard[0].dataset.opened = true
      doublecard[1].dataset.opened = true
      doublecard = []
      countTrue++
      console.log(countTrue);
      if (countTrue == 8) {
        let end = document.querySelector('.end')
        end.style.display = 'block'
        let btn = document.querySelector('.span')
        let exit = document.querySelector('.exit')
        btn.addEventListener('click', () => {
          location.href = location.href
        })
        exit.addEventListener('click', () => {
          window.close()
        })
      }
    }
    else {
      setTimeout(() => {
        cardArr.map((item) => {
          if (item.dataset.opened == 'false') {
            item.classList.remove('active')
          }
        })
      }, 300)
      doublecard = []
    }
    count = 0
  }
})