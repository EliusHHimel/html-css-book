const firstPage = document.getElementById('first');
const secondPage = document.getElementById('second');
const thirdPage = document.getElementById('third');
const openBookBtn = document.getElementById('next-page');
const bookContainer = document.getElementById('book-container');

openBookBtn.addEventListener('click', function () {
    firstPage.style.transformOrigin = 'left'
    firstPage.style.transform = 'rotateY(-160deg)'
    openBookBtn.style.display = 'none';
    const button = document.createElement('button');
    button.classList.add('next-page');
    button.setAttribute('id', 'np1')
    button.innerText = 'Next Page';
    bookContainer.appendChild(button);

    // Next page button one
    const nextPageBtn1 = document.getElementById('np1');
    nextPageBtn1.addEventListener('click', function () {
        secondPage.style.transformOrigin = 'left'
        secondPage.style.transform = 'rotateY(-160deg)'
        secondPage.style.zIndex = 21;
    })
})