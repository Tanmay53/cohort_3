function addCards() {
    event.preventDefault()
    let name = document.getElementById('name').value
    let type = document.getElementById('type').value
    let section = document.getElementById('add-cards-dyn')
    let cardsDiv = document.createElement('div')
    cardsDiv.setAttribute('class', 'cards')
    let img = document.createElement('img')
    img.setAttribute('src', 'https://media.gettyimages.com/photos/portrait-of-young-man-with-shaved-hair-and-glasses-wearing-white-in-picture-id589934727?k=6&m=589934727&s=612x612&w=0&h=zcQxgecj21L1zbB7x8Q3VJYkl6ialbe3Hj0C12Kp0X0=')
    let trainerDiv = document.createElement('div')
    trainerDiv.setAttribute('class', 'trainer-info')
    let h3 = document.createElement('h3')
    h3.textContent = name
    let p = document.createElement('p')
    p.textContent = type
    let button = document.createElement('button')
    button.setAttribute('class', 'btn')
    button.innerHTML = "Remove"
    button.addEventListener('click', function(event) {
        event.preventDefault()
        let parent = event.target.parentElement.parentElement
        section.removeChild(parent)
    })

    trainerDiv.appendChild(h3)
    trainerDiv.appendChild(p)
    trainerDiv.appendChild(button)
    cardsDiv.appendChild(img)
    cardsDiv.appendChild(trainerDiv)
    section.appendChild(cardsDiv)
} 

function removeCards() {
    event.preventDefault()
    let section = document.getElementById('add-cards-dyn')
    let cards = document.getElementsByClassName('cards')
    section.removeChild(cards)
}
