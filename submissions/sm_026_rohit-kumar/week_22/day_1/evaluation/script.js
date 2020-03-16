

function load() {

    var res = document.querySelectorAll("#card-container > *")
    for(var i = 0; i < res.length; i++) {
        res[i].remove()
    }
    for(var i = 0; i < data.length; i++) {
        sideCard(data[i].title, data[i].heading, data[i].image)    
    }

} 

function currentSelection(title, heading, image) {
    console.log(title, heading, image)
    document.getElementById("main-heading").innerHTML = heading
    document.getElementById("image1").setAttribute("src", image)
    console.log(image)
}



function sideCard(titleText, heading, image) {
    // alert('works')
    container = document.getElementById("card-container")
    
    var divCard = document.createElement("div")
    divCard.classList.add("card");
    
    // create p tag
    var title = document.createElement("p")
    title.innerText = titleText.toUpperCase()   
    title.classList.add("card-small-heading")

    var link = document.createElement('a')
    var header = document.createElement("h3")
    header.innerHTML = heading
    link.appendChild(header)
    link.setAttribute("href", "#")
    link.addEventListener("click" , function() { currentSelection(titleText, heading, image)})

    var footer = document.createElement("div")
    span1 = document.createElement("span")
    span2 = document.createElement("span")
    span1.classList.add("span-style")
    span1.classList.add("span-style")

    span1.innerHTML = "<i class='fa fa-calendar'</i>" + "&nbsp; " + (new Date().toUTCString())
    span2.innerHTML = "<i class='fa fa-sticky-note'</i>" + "&nbsp;1 comment"

    footer.appendChild(span1)
    footer.appendChild(span2)

    
    divCard.appendChild(title)
    divCard.appendChild(link)
    divCard.appendChild(footer)

    container.appendChild(divCard)  
}


function addContent() {
    // console.log('this one', document.getElementById('title')).innerText
    data.push(
        {'title': document.getElementById('title').value,
        'heading': document.getElementById('heading').value,
        'image': document.getElementById('image').value
        })

    load()
}


// load default data
load()