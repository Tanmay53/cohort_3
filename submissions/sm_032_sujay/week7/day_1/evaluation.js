var cat = document.getElementById('cat').value
var name = document.getElementById('item').value
var price = document.getElementById('price').value
var total = 0
var avg = 0

function AddToCart() {
    // console.log("Detect")
    printCurrentItem(cat, price, name)
    printReceipt()
    resetAll()
}

function resetAll() {
    // console.log("testing")
    document.getElementById('cat').value = " "
    document.getElementById('item').value = " "
    document.getElementById('price').value = " "

}
function printReceipt() {
    // Console.log("Checking")
    var divName = document.createElement('div')
    divName.innerHTML = name
    var table = document.querySelector('table')
    table.appendChild(divName)

    var divPrice = document.createElement('div')
    divPrice.innerHTML = price
    var table = document.querySelector('table')
    table.appendChild(divPrice)


    var divCat = document.createElement('div')
    divCat.innerHTML = cat
    var table = document.querySelector('table')
    table.appendChild(divCat)

}

var curCat = document.getElementById('curCategory')
var curName = document.getElementById('curName')
var curCost = document.getElementById('curPrice')

function printCurrentItem(cat, price, name) {
    curCat.innerHTML = cat
    curName.innerHTML = name
    curCost.innerHTML = price
}

var btn = document.getElementById('atc')
btn.addEventListener('click', AddToCart)


function store() {

}