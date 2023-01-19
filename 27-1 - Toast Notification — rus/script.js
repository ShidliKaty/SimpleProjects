const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Ты просто супер!',
    'Я тебя люблю!',
    'Ты красотуля!',
    'Отлично выглядишь!',
    'Ты такая классная!'
]

const colors = ['blue', 'green', 'red']

button.addEventListener('click', () => createNotification())

function createNotification(message = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(getRandomColor())

    notif.innerText = message ? message : getRandomMessage()

    toasts.append(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

