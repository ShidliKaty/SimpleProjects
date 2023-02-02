const container = document.querySelector('.container')
const URL = 'https://source.unsplash.com/random/'
const rows = 12

for(let i = 0; i < rows; i++) {
    const img = document.createElement('img')
    img.src = `${URL}${getImgSize()}`

    container.appendChild(img)
}

function getImgSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}

function getRandomNum() {
    return Math.floor(Math.random() * 10 + 300)
}