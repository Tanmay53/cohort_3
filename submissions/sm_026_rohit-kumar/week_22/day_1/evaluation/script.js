

function load() {

    var res = document.querySelectorAll("#card-container > *")
    for(var i = 0; i < res.length; i++) {
        res[i].remove()
    }
    for(var i = 0; i < data.length; i++) {
        sideCard(data[i].title, data[i].heading, data[i].image)    
    }

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

    var header = document.createElement("h3")
    header.innerHTML = heading

    var footer = document.createElement("div")
    span1 = document.createElement("span")
    span2 = document.createElement("span")
    span1.classList.add("span-style")
    span1.classList.add("span-style")

    span1.innerHTML = "<i class='fa fa-calendar'</i>" + "&nbsp;May 10, 2019"
    span2.innerHTML = "<i class='fa fa-sticky-note'</i>" + "&nbsp;1 comment"

    footer.appendChild(span1)
    footer.appendChild(span2)

    
    divCard.appendChild(title)
    divCard.appendChild(header)
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