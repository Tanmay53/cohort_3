var product = []
var quantity = []
var price = []
var x
function productForm(event) {
    event.preventDefault()

    // var i1=document.getElementById('product').value
    // product.push(i1)
    // console.log(i1)//vsbhc
    // console.log(product)//["vsbhc"]
    product.push(document.getElementById('product').value)
    // console.log(product)//["vsbhc"]
    quantity.push(document.getElementById('quantity').value)
    // console.log(quantity)//
    price.push(document.getElementById('price').value)
    // console.log(price)//
    generate_table(product,quantity,price)//
}

function generate_table(product, quantity, price) {

    var t1 = document.getElementById('divBlock')
    var table1 = document.createElement('table')
    t1.innerHTML=""
    var row1 = document.createElement('tr')

    // var columnHead1 = document.createElement('th').innerHTML = "product Name"
    // console.log(columnHead1)//product Name
    var columnHead1 = document.createElement('th')
    columnHead1.innerHTML = "product"
    console.log(columnHead1)

    // var columnHead1 = document.createElement('th').innerHTML = "product"
    // console.log(columnHead1)//product Name


    var columnHead2 = document.createElement('th')
    columnHead2.innerHTML="price"
    console.log(columnHead2)//price

    var columnHead3 = document.createElement('th')
    columnHead3.innerHTML="quantity"
    console.log(columnHead3)//quantity

    row1.appendChild(columnHead1)
    row1.appendChild(columnHead2)
    row1.appendChild(columnHead3)
    table1.appendChild(row1)
    t1.appendChild(table1)

    // console.log(product)
    // console.log(product.value)//index.js:51 Uncaught TypeError: Cannot read property 'value' of undefined
    // console.log(product.length)//index.js:52 Uncaught TypeError: Cannot read property 'length' of undefined
    // console.log((product.value).length)

    console.log(product)

    for(var i=0;i<product.length;i++)
    {
        // console.log("here")
        // var t1 = document.getElementById('divBlock')
        // console.log(t1)
        // console.log(table1)
        var row2 = document.createElement('tr')
        // console.log(row1)

        var columnValue1 = document.createElement('td')        
        var columnValue2 = document.createElement('td')
        var columnValue3 = document.createElement('td')
        // console.log(price[i])
        columnValue1.innerHTML=product[i]
        // console.log(columnValue1)
        columnValue2.innerHTML=price[i]
        // console.log(columnValue2)
        columnValue3.innerHTML=quantity[i]
        // console.log(columnValue3)

        row2.appendChild(columnValue1)
        row2.appendChild(columnValue2)
        row2.appendChild(columnValue3)
        table1.appendChild(row2)
    }
    
    // t1.appendChild(table1)

}

// -------------------------------------------------


var fontSize
var textColor
var bgColor
function settings(event)
{
    event.preventDefault()

    fontSize = document.getElementById('changeFont').value
    console.log(fontSize)

    var t2 = document.getElementById('divBlock')
    t2.style.fontSize=fontSize

    // var t1 = document.getElementById('divBlock')
    // var table1 = document.createElement('table')
    // var row1 = document.createElement('tr')

    textColor = document.getElementById('fontColor').value
    console.log(textColor)

    var t2 = document.getElementById('divBlock')
    t2.style.color=textColor

    // bgColor = document.getElementById('bgColor').value
    // console.log(textColor)

    // var t3 = document.getElementById('divBlock').row2.length
    // console.log(t3)
// 
    var t4 = document.getElementsByTagName('tr')
    for(i=1;i<=product.length;i++)
    {
        if(i%2===1)
        {
            bgColor = document.getElementById('textBgColor').value
            console.log(bgColor)
            console.log(t4[i])
            t4[i].style.backgroundColor=bgColor 
        }    

    }
}

