//developer mode
var verbose = 1;



var btn1 = document.getElementById("data");
var btn2 = document.getElementById("setting");



btn1.addEventListener("click", function () {
    getData();
    reset();
});

btn2.addEventListener("click", function () {
    fontSize();
    textColor();
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

//changing the fontsize
function fontSize() {
    var size = document.getElementById("font-size").value;

    if (size !== "") {
        var row = document.querySelectorAll("tr");
        if (verbose) {
            console.log(row)
        }
        for (var i = 0; i < row.length; i++) {
            row[i].style.fontSize = size;
        }
    }
}

//function  to  change text color
function textColor() {

    var colors = document.getElementById("color").value;

    if (colors !== "") {

        var row = document.querySelectorAll("tr");

        if (verbose) {
            console.log(row)
        }

        for (var i = 0; i < row.length; i++) {
            row[i].style.color = colors;
        }
    }

}


// function  to  change alternate row background
function bgColor() {
    var colors = document.getElementById("bg-color").value;



    if (colors !== "") {
        var row = document.querySelectorAll("tr");
        if (verbose) console.log(row);

        for (var i = 0; i < row.length; i += 2) {
            row[i].style.backgroundColor = colors;
        }
    }
}