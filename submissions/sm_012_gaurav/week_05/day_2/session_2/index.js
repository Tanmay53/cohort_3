var addItemBtn = document.getElementById('addItem');
addItemBtn.addEventListener('click',addItems);
var items = [];
var itemsDiv = document.getElementById('items');

function addItems() {
    var obj = {};
    var product = document.getElementById('product').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
    if (product.length === 0 || price.length === 0 || quantity.length === 0) {
        alert("Please Enter All the Details");
    }
    else {
        obj.product = product;
        obj.price = price;
        obj.quantity = quantity;
        items.push(obj);
        createTable();
        document.getElementById('product').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
    }
}

function createTable() {
    var rowDivs = itemsDiv.querySelectorAll('.flex-row');
    if (rowDivs.length>1) {
        for (var i = 1; i < rowDivs.length; i++) {
            itemsDiv.removeChild(rowDivs[i]);
        }
        for (var i = 0; i < items.length; i++) {
            var rowDiv = document.createElement('div');
            rowDiv.setAttribute('class','flex-row');
            var p1 = document.createElement('p');
            p1.textContent = i+1;
            var p2 = document.createElement('p');
            p2.textContent = items[i].product;
            var p3 = document.createElement('p');
            p3.textContent = items[i].price;
            var p4 = document.createElement('p');
            p4.textContent = items[i].quantity;
            rowDiv.appendChild(p1);
            rowDiv.appendChild(p2);
            rowDiv.appendChild(p3);
            rowDiv.appendChild(p4);
            itemsDiv.appendChild(rowDiv);
        }
    }
    else {
        for (var i = 0; i < items.length; i++) {
            var rowDiv = document.createElement('div');
            rowDiv.setAttribute('class','flex-row');
            var p1 = document.createElement('p');
            p1.textContent = i+1;
            var p2 = document.createElement('p');
            p2.textContent = items[i].product;
            var p3 = document.createElement('p');
            p3.textContent = items[i].price;
            var p4 = document.createElement('p');
            p4.textContent = items[i].quantity;
            rowDiv.appendChild(p1);
            rowDiv.appendChild(p2);
            rowDiv.appendChild(p3);
            rowDiv.appendChild(p4);
            itemsDiv.appendChild(rowDiv);
        }
    }
}

var fontSizeBtn = document.getElementById('changefontsize');
var fontColorBtn = document.getElementById('changefontcolor');
var bgColorBtn = document.getElementById('changebgcolor');
fontSizeBtn.addEventListener('click',changeFontSize);
fontColorBtn.addEventListener('click',changeFontColor);
bgColorBtn.addEventListener('click',changeBgColor);

function changeFontSize() {
    var size = document.getElementById('fontsize').value;
    var rowDivs = itemsDiv.querySelectorAll('.flex-row');
    for (var i = 1; i < rowDivs.length; i++) {
        rowDivs[i].style.fontSize = size+'px';
    }
    document.getElementById('fontsize').value = '';
}

function changeFontColor() {
    var color = document.getElementById('fontcolor').value;
    var rowDivs = itemsDiv.querySelectorAll('.flex-row');
    for (var i = 1; i < rowDivs.length; i++) {
        rowDivs[i].style.color = color;
    }
    document.getElementById('fontcolor').value = '';
}

function changeBgColor() {
    var bgcolor = document.getElementById('backgroundcolor').value;
    var rowDivs = itemsDiv.querySelectorAll('.flex-row');
    for (var i = 1; i < rowDivs.length; i++) {
        if (i%2 !== 0) {
            rowDivs[i].style.backgroundColor = bgcolor;
        }
    }
    document.getElementById('backgroundcolor').value = '';
}