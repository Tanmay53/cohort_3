var btn1 = document.getElementById("data");
var btn2 = document.getElementById("setting");


btn1.addEventListener("click", function () {
    getData();
    reset();
});

btn2.addEventListener("click", function () {
    fontSize();
    color();
    bgColor();
});

//function to  get data from table
function getData() {

    console.log("here")
    var product = document.getElementById("product").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantity").value;



    addToTable(product, price, quantity);
}

//function add data to table
function addToTable(product, price, quantity) {



    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var tr = document.createElement("tr");
    var tbody = document.getElementById("start");

    td1.textContent = product;
    td2.textContent = price;
    td3.textContent = quantity;
    console.log(td1, td2, td3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    console.log("tr");
    tbody.appendChild(tr);


}

// reseting the input from 
function reset() {

    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}