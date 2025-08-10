const firstBook = document.getElementById('first-book')
const secondBook = document.getElementById('second-book')
const thirdBook = document.getElementById('third-book')

const extraInfo = document.getElementsByClassName('extra-info')[1]

firstBook.addEventListener('mouseenter', fisrtBookDetails)

function showInformations(bookDiv) {
    const extraInfo = bookDiv.querySelector('.extra-info')
    extraInfo.classList.toggle('hidden')
}
