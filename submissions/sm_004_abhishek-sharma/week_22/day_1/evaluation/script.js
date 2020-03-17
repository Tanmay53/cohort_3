var blogArr = []
var count = 0

function addItem(head, content, id){
    var obj = {
        id: id,
        heading: head,
        content: content
    }
    blogArr.push(obj)
    console.log(blogArr)
    // showItems()
}

function showItems(){
    var blog = document.getElementById("container")
    for(let i= 0; i < blogArr.length; i++){
        // Make Card Component
        var card = document.createElement("div")
        card.setAttribute("class", "card")
        blog.appendChild(card)

        // Card Image
        var cardImg = document.createElement("div")
        cardImg.setAttribute("class", "card-img")
        card.appendChild(cardImg)
        var cardLogo = document.createElement("img")
        cardLogo.setAttribute("src", "https://via.placeholder.com/50")
        cardImg.appendChild(cardLogo)

        // Card Heading
        var cardHead = document.createElement("div")
        cardHead.setAttribute("class", "card-heading")
        card.appendChild(cardHead)
        var heading = document.createElement("h3")
        heading.innerHTML = blogArr[i].heading
        cardHead.appendChild(heading)
        
        // Card Content
        var cardContent = document.createElement("div")
        cardContent.setAttribute("class", "card-content")
        card.appendChild(cardContent)
        var content = document.createElement("p")
        content.innerHTML = blogArr[i].content
        cardContent.appendChild(content)

        // Delete Option
        var btn = document.createElement("button")
        btn.innerHTML = "DELETE"
        btn.setAttribute("id", blogArr[i].id)
        btn.setAttribute("onClick", "deleteItem()")
        card.appendChild(btn)
    }
}

function deleteItem() {
    var id = document.getElementById(this.id)
    console.log(id)
}

function createItem() {
    count++
    var heading = document.getElementById("heading")
    var content = document.getElementById("content")
    addItem(heading.value, content.value, count)
    showItems()
    heading.value = " "
    content.value = " "
}

// var submitBtn = document.getElementById("addItem")
// submitBtn.addEventListener("click", createItem)
