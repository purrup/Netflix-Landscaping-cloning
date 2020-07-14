const questionsList = document.querySelector('.questions-list')
const details = document.querySelectorAll('details')

details.forEach(detail => {
  detail.addEventListener('toggle', e => {
    // detail.classList.toggle('close')
    // 切換questionList中的"+" & "x"
    const icons = e.target.querySelector('.material-icons')
    if (e.target.open) {
      icons.innerText = 'clear'
      openOneAnswerOnly(e.target)
    } else {
      icons.innerText = 'add'
    }
  })
})

// questionList中，每次只顯示一組解答
function openOneAnswerOnly(selectedDetail) {
  details.forEach(detail => {
    if (detail !== selectedDetail && detail.open) {
      detail.open = false
    }
  })
}