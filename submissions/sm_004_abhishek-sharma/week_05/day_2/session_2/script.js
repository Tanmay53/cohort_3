var addItemBtn = document.getElementById("addItem")
var itemTable = document.getElementById("displayTable")
var count = 0

function printItem(product, price, quantity, bgCount){
    var firstDiv = document.createElement("div")
    firstDiv.innerHTML = product.value
    itemTable.appendChild(firstDiv)
    var secondDiv = document.createElement("div")
    secondDiv.innerHTML = price.value
    itemTable.appendChild(secondDiv)
    var thirdDiv = document.createElement("div")
    thirdDiv.innerHTML = quantity.value
    itemTable.appendChild(thirdDiv)
    changeBgColor(bgCount, firstDiv, secondDiv, thirdDiv)
}

function changeBgColor(num, a, b, c){
    if(num % 2 != 0){
        a.style.background = "blue"
        b.style.background = "blue"
        c.style.background = "blue"
    }
}

function addRecord(){
    count++
    var product = document.getElementById("product")
    var price = document.getElementById("price")
    var quantity = document.getElementById("quantity")
    printItem(product, price, quantity, count)
    product.value = " "
    price.value = " "
    quantity.value = " "
    console.log(count)

}

addItemBtn.addEventListener("click", addRecord)