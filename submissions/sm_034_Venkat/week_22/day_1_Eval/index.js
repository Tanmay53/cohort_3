var data = []
function formSubmit() {
    // console.log('yes')
    event.preventDefault()
    let url = document.querySelector("#inputImageUrl").value;
    let title = document.querySelector("#inputCardTitle").value;
    let text = document.querySelector("#inputTextArea").value;
    let obj = {
        url: url,
        title: title,
        text: text
    }
    data.push(obj)
    console.log(data)
    displayCards(data)
}

displayCards = (data) => {
    let parent = document.getElementById("cardsDiv")
    parent.innerHTML = ""
    // data.map(each => {
    //     let card1 = 
    //        `<div id="eachCard">
    //             <img src="${each.url}" alt="cardImage.jpg" height="200px">
    //             <div>
    //                 <h3>${each.title}</h3>
    //                 <p>${each.text}</p>
    //                 <button onclick="removeCard("${each.title}")">Remove</button>
    //             </div>
    //         </div>`
    //     // parent.innerHTML = card1
    //     parent.append(card1)
    // })

    // for(i= 0; i< data.length; i++) {
    //     let card1 = 
    //        `<div id="eachCard">
    //             <img src="${data[i].url}" alt="cardImage.jpg" height="200px">
    //             <div>
    //                 <h3>${data[i].title}</h3>
    //                 <p>${data[i].text}</p>
    //                 <button onclick="removeCard("${data[i].title}")">Remove</button>
    //             </div>
    //         </div>`
    //     // parent.innerHTML = card1
    //     parent.append(card1)
    // }

    // data.map(each => {
    for (i = 0; i < data.length; i++) {
        let div = document.createElement('div')
        div.setAttribute("id", "eachCard")
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let img = document.createElement('img')
        let btn = document.createElement('button')
        btn.innerText= "Remove"
        btn.setAttribute("id", "removeBtn")
        btn.addEventListener("click", 
            function() {
                this.parent.remove()
            })
        img.setAttribute("height", "180px")
        // img.src = each.url
        // h3.innerText = each.title
        // p.innerText = each.text

        img.src = data[i].url
        h3.innerText = data[i].title
        p.innerText = data[i].text
        div.append(img)
        div.append(h3)
        div.append(p)
        div.append(btn)
        parent.append(div)
    }
}

// removeCard = (name) => {
//     let newData = data.filter(each => {
//         return (each.title != name)
//     })
//     data = newData
//     displayCards(data)
// }

removeCard = (n) => {
    let newData = data.splice(n, 1)
    data = newData
    displayCards(data)
}