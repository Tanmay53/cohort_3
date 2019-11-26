// add event listener to add form button and display button
var submitData = document.getElementById("submitData");
submitData.addEventListener("click", createCustomer);
// display button
var displayData = document.getElementById("displayData");
displayData.addEventListener("click", displayCustomer);

// customer constructor
function Customers(
  firstName,
  lastName,
  dateOfBirth,
  balance,
  accountNumber,
  sharedAccountHolders
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = dateOfBirth;
  this.balance = balance;
  this.accountNumber = accountNumber;
  this.sharedAccountHolders = sharedAccountHolders;
  this.getDetails = function() {
    var output = "";
    for (key in this) {
      if (key != "getDetails") {
        output += key + ":" + this[key] + "\n";
      }
    }
    return output;
  };
}

// customer array
var customerArr = [];

// create customer function to add new customer using constructor
function createCustomer() {
  var inputs = document.querySelectorAll(".input-box");
  // init an empty object
  var newCustomer = new Customers();
  var i = 0;
  for (key in newCustomer) {
    if (newCustomer[key] == undefined) {
      if (key != "sharedAccountHolders") {
        newCustomer[key] = inputs[i].value;
      } else {
        newCustomer[key] = inputs[i].value.split(",");
      }
      inputs[i].value = "";
      i++;
    }
  }
  customerArr.push(newCustomer);
  console.log(customerArr);
}

// display customer function to list all customer
function displayCustomer() {
  event.preventDefault();
  var displayContainer = document.getElementById("displayContainer");
  displayContainer.innerHTML = "";
  for (var i = 0; i < customerArr.length; i++) {
    var p = document.createElement("pre");
    var hr = document.createElement("hr");
    p.textContent = customerArr[i].getDetails();
    displayContainer.appendChild(p);
    displayContainer.appendChild(hr);
  }
}

function addCustomerForm() {
  event.preventDefault();
  var customerForm = document.getElementById("customerForm");

  var items = [
    "first-name",
    "last-name",
    "dob",
    "balance",
    "acc-number",
    "acc-holder"
  ];
  for (var i = 0; i < items.length; i++) {
    var label = document.createElement("label");
    var input = document.createElement("input");
    label.setAttribute("for", items[i]);
    label.textContent = items[i];
    input.setAttribute("type", "text");
    input.setAttribute("name", items[i]);
    input.setAttribute("calss", "input-box");
    customerForm.appendChild(label);
    customerForm.appendChild(input);
  }
  var hr = document.createElement("hr");
  customerForm.appendChild(hr);
  var button = document.createElement("button");
  button.textContent = "Submit";
  button.setAttribute("name", "submit");
  button.setAttribute("id", "submitData");
  customerForm.appendChild(button);
  // submit button
  var submitData = document.getElementById("submitData");
  submitData.addEventListener("click", createCustomer);
}
