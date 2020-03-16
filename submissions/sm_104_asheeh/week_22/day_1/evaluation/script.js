
const createCard = () => {
    // alert("hi")
    let parent = document.getElementById("topDiv")
    let section = document.createElement("section")
    section.setAttribute("id", 'parentCard')
    let div1 = document.createElement("div")
    div1.setAttribute("class", "column1")
    let img1 = document.createElement("img")
    img1.setAttribute("src", "images/australia.png")
    img1.setAttribute("class", "country-flag")
    let h21 = document.createElement("h2")
    h21.textContent = "Australia"
    let div2 = document.createElement("div")
    div2.setAttribute("class", "column2")
    let p1 = document.createElement("p")
    p1.textContent = "Australia vs England"
    let h22 = document.createElement("h2")
    h22.textContent = "VS"
    let p2 = document.createElement("p")
    p2.textContent = "15 September 2019"
    let div3 = document.createElement("div")
    div3.setAttribute("class", "column1")
    let h23 = document.createElement("h2")
    h23.textContent = "England"
    let img2 = document.createElement("img")
    img2.setAttribute("src", "images/uk.jpg")
    img2.setAttribute("class", "country-flag")
    let btn = document.createElement("button")
    btn.innerHTML = "remove"
    btn.setAttribute("id", "btnDeleteCard")
    btn.addEventListener("click", function(e) {
        e.preventDefault()
        let child = e.target.parentElement.parentElement
        let parent = document.getElementById("topDiv")
        parent.removeChild(child)
        console.log(parent1)
    })

    div3.appendChild(img2)
    div3.appendChild(h23)
    div2.appendChild(p1)
    div2.appendChild(h22)
    div2.appendChild(p2)
    div3.appendChild(h21)
    div3.appendChild(img1)
    // div3.appendChild(btn)
    section.appendChild(div1)
    section.appendChild(div2)
    section.appendChild(div3)
    
    parent.appendChild(section)
}

document.getElementById("btnCreateCard").addEventListener("click", createCard)