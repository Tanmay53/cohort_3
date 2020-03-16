var category= document.getElementById('categoryInp')
var heading= document.getElementById('headingInp')
var content= document.getElementById('contentInp')
var cardmain= document.getElementById('cards')
var i=4
function addCard(){
    // console.log(category.value)
    // console.log(heading.value)
    // console.log(content.value)
    var card= document.createElement('div')
    cardmain.appendChild(card)
    card.setAttribute('class','card')
    card.setAttribute('id',`card${i}`)
    var div1 = document.createElement('div')
    card.appendChild(div1)
    var div2 = document.createElement('div')
    card.appendChild(div2)

    var img= document.createElement('img')
    div1.appendChild(img)
    img.setAttribute('src',"https://placeimg.com/250/250/tech")

    var catg= document.createElement('div')
    div2.appendChild(catg)
    catg.setAttribute('class','category')
    var head= document.createElement('div')
    div2.appendChild(head)
    head.setAttribute('class','heading')
    var contnt= document.createElement('div')
    div2.appendChild(contnt)
    contnt.setAttribute('class','content')

    catg.textContent=category.value
    head.textContent=heading.value
    contnt.textContent=content.value

    var btnsrow= document.createElement('div')
    div2.appendChild(btnsrow)
    btnsrow.setAttribute('class','btnsrow')

    var cardbtn= document.createElement('div')
    btnsrow.appendChild(cardbtn)
    cardbtn.setAttribute('class','cardbtn')
    cardbtn.textContent='Apply now'
    var cardbtn2= document.createElement('div')
    btnsrow.appendChild(cardbtn2)
    cardbtn2.setAttribute('class','cardbtn cardbtn2')
    cardbtn2.textContent='Delete'
    cardbtn2.addEventListener('click',del)
    

    i++
}

function del(event){
    var cardid= event.target.parentElement.parentElement.parentElement.remove()
}