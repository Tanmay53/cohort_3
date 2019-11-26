var products = [];

function add() {
    var item = {};
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var qty = document.getElementById("qty").value;
    item.name = name;
    item.price = price;
    item.qty = qty;
    products.push(item);
    display();
}

function display() {
    var tbody = document.getElementById("body");
    tbody.innerHTML = "";

    products.forEach(function(obj, index) {
        var tr = document.createElement("tr");
        var tdSl = document.createElement("th");
        tdSl.setAttribute("scope", "row");
        tdSl.textContent = index + 1;
        var tdName = document.createElement("td");
        tdName.textContent = obj.name;
        var tdPrice = document.createElement("td");
        tdPrice.textContent = obj.price;
        var tdQty = document.createElement("td");
        tdQty.textContent = obj.qty;
        tr.appendChild(tdSl);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQty);
        tbody.appendChild(tr);
    });
}

function size() {
    var body = document.querySelector("body");
    body.style.fontSize = "20px";
}

function color() {
    var body = document.querySelector("body");
    body.style.color = "blue";
}

function alternate() {
    var table = document.querySelector("table");
    table.className = "table table-striped";
}
