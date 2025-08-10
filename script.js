const body = document.getElementsByTagName('body')

const firstBook = document.getElementById('first-book')
const secondBook = document.getElementById('second-book')
const thirdBook = document.getElementById('third-book')

firstBook.addEventListener('mouseover', showFirst)
firstBook.addEventListener('mouseleave', returnFirst)
secondBook.addEventListener('mouseover', showSecond)
secondBook.addEventListener('mouseleave', returnSecond)
thirdBook.addEventListener('mouseover', showThird)
thirdBook.addEventListener('mouseleave', returnThird)

