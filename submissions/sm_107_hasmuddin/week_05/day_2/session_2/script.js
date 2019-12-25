//form input value
productName = document.getElementById("product");
productPrice = document.getElementById("price");
productQty = document.getElementById("qty");
addBtn = document.getElementById("addItem");
tableElem = document.getElementById("table");

// add Event Listener at button

addBtn.addEventListener("click", add);

// function
items = [];

function add() {
  obj = {};
  obj["name"] = productName.value;
  obj["price"] = productPrice.value;
  obj["qty"] = productQty.value;
  items.push(obj);
  displayingItem();
}

// creating element to table
function displayingItem() {
  tr = document.createElement("tr");
  prName = document.createElement("td");
  prName.textContent = productName.value;

  prPrice = document.createElement("td");
  prPrice.textContent = productPrice.value;

  prQty = document.createElement("td");
  prQty.textContent = productQty.value;

  //  appending all child in row
  tr.appendChild(prName);
  tr.appendChild(prPrice);
  tr.appendChild(prQty);

  // appending row in table
  tableElem.appendChild(tr);
}

// settings .....................///////

textSize = document.getElementById("fontSize");

textColor = document.getElementById("fontColor");

textBg = document.getElementById("bgColor");

// event listener

textSize.addEventListener("change", size);
textColor.addEventListener("change", color);
textBg.addEventListener("change", bgcolor);

//functions

function size() {
  allRows = document.querySelectorAll("#table tr");
  for (var i = 1; i < allRows.length; i++) {
    allRows[i].style.fontSize = textSize.value;
  }
}

function color() {
  allRows = document.querySelectorAll("#table tr");
  for (var i = 1; i < allRows.length; i++) {
    allRows[i].style.color = textColor.value;
  }
}

function bgcolor() {
  allRows = document.querySelectorAll("#table tr");
  for (var i = 1; i < allRows.length; i++) {
    if (i % 2 == 0) {
      allRows[i].style.background = textBg.value;
    }
  }
}
