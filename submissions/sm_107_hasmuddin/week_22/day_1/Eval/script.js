let content_heading = document.getElementById("content-heading")
let field = document.getElementById("field")
let content = document.getElementById("content")
let add_card = document.getElementById("add-card")
let cardGen = document.getElementById("cardGenerate")
let arr = []
function dom_render(ar) {
    cardGen.innerHTML = ""
    ar.forEach((e, i) => {
        let card = `
                
                <img src = "https://via.placeholder.com/250x150" alt = "" />
                <div class="flex">
                    <p>${e.heading}</p>
                    <h2>${e.field}</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci, error quia
                        corrupti omnis ullam nemo dolore hic quo sunt maxime alias.
                            </p>
                        <button value=${i} onclick="remove_card()">Apply Now</button>
                </div>       
        `
        let new_div = document.createElement("div")
        new_div.className = "card col-lg-4 col-12"
        new_div.innerHTML = card
        cardGen.append(new_div)

    })
}

add_card.addEventListener("click", (e) => {
    e.preventDefault()
    obj = {}
    obj['field'] = field.value
    obj['heading'] = content_heading.value
    arr.push(obj)
    dom_render(arr)
})

const remove_card = () => {
    arr = arr.filter((e, i) => {
        return i !== Number(event.target.value)
    })
    dom_render(arr)
}