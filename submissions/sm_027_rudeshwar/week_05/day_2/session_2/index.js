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
    generate_table(product,quantity,price)
}

function generate_table(product, quantity, price) {

    
    var t1 = document.getElementById('divBlock')
    var table1 = document.createElement('table')
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
        console.log("here")
        var t1 = document.getElementById('divBlock')
        console.log(t1)
        var table1 = document.createElement('table')
        console.log(table1)
        var row1 = document.createElement('tr')
        console.log(row1)

        var columnValue1 = document.createElement('td')        


        // var columnValue1 = document.createElement('td').product[i]
        // console.log(columnValue1)

        // var columnValue1 = document.createElement('td').value
        // console.log(columnValue1)//undefined
        // console.log(columnValue1)
        // columnValue1.appendChild(product[i])

        var columnValue2 = document.createElement('td')
        console.log(columnValue2)
        // columnValue2.appendChild(quantity[i])

        var columnValue3 = document.createElement('td')
        console.log(columnValue3)
        // columnValue3.appendChild(price[i])

        row1.appendChild(columnValue1)
        row1.appendChild(columnValue2)
        row1.appendChild(columnValue3)
        // row1.appendChild(price.value[i])
        // row1.appendChild(quantity.value[i])

        table1.appendChild(row1)
        t1.appendChild(table1)
    }

}

