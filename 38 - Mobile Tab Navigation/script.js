const contents = document.querySelectorAll('.content')
const lists = document.querySelectorAll('nav ul li')

lists.forEach((list, idx)=> {
    list.addEventListener('click', () => {
        hideAllContents()
        hideAllLists()
        list.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllLists() {
    lists.forEach(list => list.classList.remove('active'))
}