const imgs = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 3000)

function run() {
    idx++
    changeImg()
}

function changeImg() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 3000)
}

left.addEventListener('click', () => {
    idx--
    changeImg()
    resetInterval()
})

right.addEventListener('click', () => {
    idx++
    changeImg()
    resetInterval()
})


