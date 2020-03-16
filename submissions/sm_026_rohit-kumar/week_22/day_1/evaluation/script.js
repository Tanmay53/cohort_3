function sideCard() {
    // alert('works')
    container = document.getElementById("card-container")
    
    var divCard = document.createElement("div")
    divCard.classList.add("card");
    
    // create p tag
    var title = document.createElement("p")
    title.innerHTML = "HEALTHY FOOD"
    title.classList.add("card-small-heading")

    var header = document.createElement("h3")
    header.innerHTML = "Man does day divided morning after give."

    var footer = document.createElement("div")
    span1 = document.createElement("span")
    span2 = document.createElement("span")

    span1.innerHTML = "May 10, 2019"
    span2.innerHTML = "1 comment"

    footer.appendChild(span1)
    footer.appendChild(span2)

    
    divCard.appendChild(title)
    divCard.appendChild(header)
    divCard.appendChild(footer)

    container.appendChild(divCard)  
}

