var addItemBtn = document.getElementById("addItem")
var itemTable = document.getElementById("displayTable")
var changeFontSize = document.getElementById("changeSize")
var changeFontColor = document.getElementById("changeTextColor")
var changeAltColor = document.getElementById("changeBgColor")

// Printing the User products detail inside the table
function printItem(product, price, quantity) {
    var firstDiv = document.createElement("div")
    firstDiv.innerHTML = product.value
    itemTable.appendChild(firstDiv)
    var secondDiv = document.createElement("div")
    secondDiv.innerHTML = price.value
    itemTable.appendChild(secondDiv)
    var thirdDiv = document.createElement("div")
    thirdDiv.innerHTML = quantity.value
    itemTable.appendChild(thirdDiv)
    tableFontSize()
    tableFontColor()
    changeBackgroundColor()
}

// Adding Product details to the table
function addRecord() {
    var product = document.getElementById("product")
    var price = document.getElementById("price")
    var quantity = document.getElementById("quantity")
    printItem(product, price, quantity)
    product.value = " "
    price.value = " "
    quantity.value = " "
}
addItemBtn.addEventListener("click", addRecord)

// Changing the text-size of contents in Products Table
function tableFontSize() {
    var divs = itemTable.querySelectorAll("div")
    var newFontSize = document.getElementById("fontSize")
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i]
        div.style.fontSize = newFontSize.value
    }
}
changeFontSize.addEventListener("click", tableFontSize)

// Changing the color of content inside the Table
function tableFontColor() {
    var divs = itemTable.querySelectorAll("div")
    var newFontColor = document.getElementById("fontColor").value
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i]   
        div.style.color = newFontColor
    }
}
changeFontColor.addEventListener("click", tableFontColor)

// Changing background-color of Alternate Table rows
function changeBackgroundColor() {
    var divs = itemTable.querySelectorAll("div")
    var newBgColor = document.getElementById("bgColor").value
    for (var i = 3; i < divs.length; i += 6) {
        var div = divs[i]
        div.style.backgroundColor = newBgColor
        div = divs[i + 1]
        div.style.backgroundColor = newBgColor
        div = divs[i + 2]
        div.style.backgroundColor = newBgColor
    }
}   
changeAltColor.addEventListener("click", changeBackgroundColor)