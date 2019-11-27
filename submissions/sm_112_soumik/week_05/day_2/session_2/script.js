function updateList() {
  var product = document.getElementById("product").value;
  var price = document.getElementById("price").value;
  var quantity = document.getElementById("quantity").value;
  var table = document.getElementById("table");
  //   Object of all the shop list
  var Mylist = {
    myProduct: product,
    myPrice: price,
    Myquantity: quantity
  };
  //   Creating tds and trs
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  td1.innerHTML = product;
  td2.innerHTML = price;
  td3.innerHTML = quantity;
  //   Appen tr_->td*3
  table.appendChild(tr);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  //   Emptying the input box
  document.getElementById("product").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}
var selFont = document.getElementById("font");
var selCol = document.getElementById("color");
var selBgColor = document.getElementById("bg-color");

function selectFont() {
  var font = document.getElementById("font").value;
  var td = document.querySelectorAll("td");
  for (i = 3; i < td.length; i++) {
    td[i].style.fontSize = font;
  }
}
function selectColor() {
  var color = document.getElementById("color").value;
  var td = document.querySelectorAll("td");
  for (i = 3; i < td.length; i++) {
    td[i].style.color = color;
  }
}
function selectBgcolor() {
  var Bgcolor = document.getElementById("bg-color").value;
  var td = document.querySelectorAll("tr");
  for (i = 1; i < td.length; i += 2) {
    td[i].style.backgroundColor = Bgcolor;
  }
}
selFont.addEventListener("change", selectFont);
selCol.addEventListener("change", selectColor);
selBgColor.addEventListener("change", selectBgcolor);
