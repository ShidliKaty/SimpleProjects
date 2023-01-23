const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const innerT = document.getElementById('innerT')
const innerText = document.getElementById('innerText')
let text = 'We love programming!'
let idx = 1
let speed = 300 / speedEl.value 

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

innerT.addEventListener('submit', (e) => {
    e.preventDefault()

    text = innerText.value

    writeText()
})