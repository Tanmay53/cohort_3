var addBtn = document.getElementById("addBtn");
var fsize = document.getElementById("fsize");
var fcolor = document.getElementById("fcolor");
var bgcolor = document.getElementById("bgcolor");
var table = document.getElementById("products");

addBtn.addEventListener("click", getInputs);
fsize.addEventListener("change", changeFontSize);
fcolor.addEventListener("change", changeFontColor);
bgcolor.addEventListener("change", changeBackgroundColor);

var inputs = document.querySelectorAll("input");
var inp = [];

var product;
var price;
var quantity;

function getInputs() {
  inp = [];
  for (var i = 0; i < inputs.length; i++) {
    inp.push(inputs[i].value);
    inputs[i].value = "";
  }
  //   console.log(inp);

  product = inp[0];
  price = inp[1];
  quantity = inp[2];

  if (product != "" && price != "" && quantity != "") {
    // console.log(product, price, quantity);
    displayProducts();
  }
}

function displayProducts() {
  var tr = document.createElement("tr");
  inp.forEach(function(e) {
    var td = document.createElement("td");
    td.textContent = e;

    tr.appendChild(td);
  });
  table.appendChild(tr);
}

function changeFontSize() {
  if (fsize.value != "") {
    var rows = document.querySelectorAll("td");
    for (var i = 0; i < rows.length; i++) {
      rows[i].style.fontSize = fsize.value;
    }
  }
}

function changeFontColor() {
  if (fcolor.value != "") {
    var rows = document.querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
      rows[i].style.color = fcolor.value;
    }
  }
}

function changeBackgroundColor() {
  if (bgcolor.value != "") {
    var rows = document.querySelectorAll("tr");
    for (var i = 1; i < rows.length; i++) {
      if (i % 2 != 0) {
        rows[i].style.background = bgcolor.value;
      }
    }
  }
}
