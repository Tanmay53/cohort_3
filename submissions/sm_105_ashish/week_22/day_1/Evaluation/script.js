function getDetails(){
   var inputHeadLine  = document.getElementById('headline').value
   var inputDate = document.getElementById('date').value

    let parent = document.getElementById("appendCard")
    let cardsDiv = document.createElement('div')
    cardsDiv.setAttribute('class', 'small added')
    let logodiv = document.createElement('div')
    logodiv.setAttribute('class',"logo")
    let img = document.createElement('img')
    img.setAttribute('src', 'https://via.placeholder.com/100x100?text=%22placeholder%60image%60')
    let headlinediv = document.createElement('div')
    headlinediv.setAttribute('class', 'head-line')
    let p1 = document.createElement('p')
    p1.textContent = inputHeadLine
    let p2 = document.createElement('p')
    p2.textContent = `${inputDate} |  0 comments`
    let btn = document.createElement("button")
    btn.setAttribute("class","rem")
    btn.addEventListener("click",function(e){
        var pr = document.getElementsByClassName('added')
        console.log(e.target.parentNode.parentNode.parentNode)
        e.target.parentNode.parentNode.parentNode.removeChild(pr[0])
    })
    btn.innerHTML = "delete card"
    

    headlinediv.appendChild(p1)
    headlinediv.appendChild(p2)
    headlinediv.appendChild(btn)
    logodiv.appendChild(img)
    cardsDiv.appendChild(logodiv)
    cardsDiv.appendChild(headlinediv)
    parent.appendChild(cardsDiv)
}




