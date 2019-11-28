
function addRecord() {
    var product = document.getElementById('prod')
    var price = document.getElementById('price')
    var quantity = document.getElementById('quant')
    var parent = document.getElementById('dataTable')
    var arr = [product, price, quantity]
    var divs = parent.querySelectorAll('div')

    for(var i = 0; i < arr.length; i++){
        var div = document.createElement('div')
        div = arr[i]
        divs[i].appendChild(div)
    }

}

