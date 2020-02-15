$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    product = urlParams.get('product');
    performFilter(product)
})

function performFilter(product){
    // console.log(localStorage.getItem('myproducts'))
    var productData = JSON.parse(localStorage.getItem('myproducts'))
    // console.log(productData)
    var filteredData = productData.data.filter(a=>a.subcategory===product)  
    //console.log(productData)
    console.log(productData)
    populatePages(filteredData)
}

function populatePages(productData) {

    // console.log(productData)

    var bodydiv = document.querySelector('body')
    var container = document.createElement('div')
    container.setAttribute('class', 'container-fluid px-5 py-2')
    bodydiv.append(container)

    var row = document.createElement('div')
    row.setAttribute('class', 'row text-center')
    container.append(row)

    for (let i = 0; i < productData.length; i++) {
        var col = document.createElement('div')
        col.setAttribute('class', 'col-6 col-md-4 col-lg-2')
        row.append(col)

        var card = document.createElement('div')
        card.setAttribute('class', 'card mb-2')

        var cardHeader = document.createElement('div')
        cardHeader.setAttribute('class', 'card-body')
        var image = document.createElement('img')
        image.setAttribute('src', productData[i]['url'])
        image.setAttribute('class', 'size')
        cardHeader.append(image)
        card.append(cardHeader)

        var cardBody = document.createElement('p')
        cardBody.innerHTML = `<span class="p-0">${productData[i]['name']}</span></br>
                                <span class="text-success p-0">From <i class="fas fa-rupee-sign"></i> ${productData[i]['price']}</span></br>
                                <span class="text-muted">${productData[i]['description']}</span>`
        card.append(cardBody)

        var cardFooter = document.createElement('div')
        cardFooter.setAttribute('class', 'card-footer')
        var btn = document.createElement('button')
        btn.textContent = "Add to Cart"
        btn.setAttribute('value', i)
        btn.setAttribute('class', 'btn btn-primary text-white px-4')
        cardFooter.append(btn)
        card.append(cardFooter)
        col.append(card)
    }
}