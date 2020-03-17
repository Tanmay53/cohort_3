var datalist = []
var id = 7
function addcard() {
    id = id + 1

    let title = document.getElementById("titleinput").value
    let desc = document.getElementById("descinput").value

    let parendiv = document.getElementsByClassName('narrowcards')[0]
    let carddiv = document.createElement('div')
    carddiv.setAttribute('class', 'card' + id)

    let headerele = document.createElement('h3')
    carddiv.appendChild(headerele)
    headerele.innerHTML = title

    let pele = document.createElement('p')
    pele.innerHTML = desc
    carddiv.appendChild(pele)

    let btnele = document.createElement('button')
    btnele.innerHTML = "Delete"
    btnele.setAttribute('onclick', `deletecard(${id})`)
    btnele.setAttribute('id', id)
    carddiv.appendChild(btnele)

    parendiv.appendChild(carddiv)

    document.getElementById("titleinput").value = ""
    document.getElementById("descinput").value = ""

    let formdiv = document.getElementsByClassName('forminputdiv')[0]
    formdiv.classList.add('hidden')
}

function deletecard(id) {
    let cardid = document.getElementsByClassName('card' + id)[0]
    cardid.classList.add('remove')
}

function showform() {
    let formdiv = document.getElementsByClassName('forminputdiv')[0]
    formdiv.classList.remove('hidden')
}