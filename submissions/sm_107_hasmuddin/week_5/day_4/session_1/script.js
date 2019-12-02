var customerArr = [];

var Customers = function(
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
      output += key + ":" + this[key] + "\n";
      if (key == "sharedAccountHolders") break;
    }
    return output;
  };
};

function addCustomer() {
  fName = document.getElementById("firstName");
  lName = document.getElementById("lastName");
  dob = document.getElementById("dob");
  blnc = document.getElementById("balance");
  acNum = document.getElementById("acNumber");
  shAc = document.getElementById("acHolder");

  var customer = new Customers(
    fName.value,
    lName.value,
    dob.value,
    blnc.value,
    acNum.value,
    shAc.value
  );
  customerArr.push(customer);
  alert("Customer added")
}

//printing

printBtn = document.getElementById("printCustomer");
printBtn.addEventListener("click", printCustomer);

function printCustomer() {
  displayContainer = document.getElementById("displayContainer");
  for (var i = 0; i < customerArr.length; i++) {
    var output = "";
    for (key in customerArr[i]) {
      output += key + " " + ":" + " " + customerArr[i][key] + "\n";
      if (key == "sharedAccountHolders") break;
    }
    pTag = document.createElement("p");
    pTag.textContent = output;
    displayContainer.appendChild(pTag);
  }
}
