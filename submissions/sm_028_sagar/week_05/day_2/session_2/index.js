var product_detail = [];


var add_btn = document.getElementById('add_item');
add_btn.addEventListener('click', add_item)

//function for product name, price, quantity
function add_item() {
    var product = document.getElementById('product').value;
    var price = document.getElementById('price').value;
    var qty = document.getElementById('qty').value;

    obj = {
        product: product,
        price: price,
        qty: qty
    };

    product_detail.push(obj);
    // console.log(product_detail);

    //append element to array
    create_table(obj);
}


//append item
function create_table(obj) {
    var parent = document.createElement('div');
    parent.setAttribute("class", "parent");
    var table = document.getElementById('table');

    for (key in obj) {
        var div = document.createElement('div');
        div.setAttribute("class", "settings")
        div.textContent = obj[key];
        parent.appendChild(div);
    }
    table.appendChild(parent)
    add_settings();

}



var set_submit = document.getElementById('set_submit');
set_submit.addEventListener('click', add_settings)

//add settings:
function add_settings() {

    var ele = document.getElementsByClassName('settings');
    var font_size = Number(document.getElementById('font-size').value);
    var color = document.getElementById('color').value;
    var back_color = document.getElementById('back_color').value;

    var cnt = 0;
    for (var i = 0; i < ele.length; i++) {
        ele[i].style.fontSize = font_size;
        ele[i].style.color = color;
    }

    var parent = document.getElementsByClassName('parent');
    for (var i = 0; i < parent.length; i++) {
        if (i % 2 != 0) {
            parent[i].style.backgroundColor = back_color;
        }
    }
}