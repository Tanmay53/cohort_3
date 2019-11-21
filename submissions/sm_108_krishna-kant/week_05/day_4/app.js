var customerArr = [];
var customer = document.getElementById("customer");
var addCust = document.getElementById("addCust");
var displayContainer = document.getElementById("displayContainer");
var printCust = document.getElementById("printCust");

printCust.addEventListener("click", display);
addCust.addEventListener("click", addCustomer);

function Customers(fname, lname, dob, balance, accNumber, shAccHolder) {
  this.fname = fname;
  this.lname = lname;
  this.dob = dob;
  this.balance = balance;
  this.accNumber = accNumber;
  this.shAccHolder = shAccHolder;
}

// Input Field Details
var input_type = ["text", "text", "text", "number", "number", "text", "submit"];
var label_type = [
  "First name",
  "Last Name",
  "Date Of Birth",
  "Balance",
  "Account Number",
  "Share account Holder",
  ""
];
var ids = [
  "fname",
  "lname",
  "dob",
  "balance",
  "acc_num",
  "shacc_hol",
  "submit"
];

function addCustomer() {
  // Dynamically adding input
  for (var i = 0; i < input_type.length; i++) {
    var input = document.createElement("input");
    var label = document.createElement("p");
    input.type = input_type[i];
    input.id = ids[i];
    if (i == 6) {
      input.value = ids[i];
    }
    label.innerHTML = label_type[i];
    customer.appendChild(label);
    customer.appendChild(input);
  }
  document.getElementById("submit").addEventListener("click", function() {
    getUIFields(...ids);
  });
}

// Object Creation
function getUIFields(fname, lname, dob, balance, acc_num, shacc_hol) {
  var customers = new Customers(
    document.getElementById(fname).value,
    document.getElementById(lname).value,
    document.getElementById(dob).value,
    document.getElementById(balance).value,
    document.getElementById(acc_num).value,
    document.getElementById(shacc_hol).value.split(",")
  );
  customerArr.push(customers);
  console.log(customerArr);
  customer.innerHTML = "";
}

function display() {
  var div;
  displayContainer.innerHTML = "";
  div = document.createElement("div");
  customerArr.forEach(function(val, index) {
    var h4 = document.createElement("h4");
    h4.innerText = `User ${index + 1}`;
    var p = document.createElement("pre");
    p.innerHTML = displayCustomer(val);
    div.appendChild(h4);
    div.appendChild(p);
  });
  displayContainer.appendChild(div);
}
// display Customer
function displayCustomer(obj) {
  var str = "";
  for (key in obj) {
    str += `${key} : ${obj[key]} \n`;
  }
  return str;
}
