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

 // This function returns a string with all the properties of the object
 this.displayDetails = function () {
  var output = "";
  output += "First Name" + ": " + this.firstName + "\n";
  output += "Last Name" + ": " + this.lastName + "\n";
  output += "Date Of Birth" + ": " + this.dateOfBirth + "\n";
  output += "Balance" + ": " + this.balance + "\n";
  output += "Account Number" + ": " + this.accountNumber + "\n";
  output += "Share Account Holders" + ": " + this.sharedAccountHolders + "\n";
  return output; // Output is a string!
 };
}

// This array contains all the customers Objects!
var customerArr = [];
function createCustomer() {
 // This will return an array of all the input objects with the class = "customer-details"
 var inputs = document.querySelectorAll(".customer-details");

 // This creates an empty Customers() object
 var newCustomer = new Customers();

 //This is a counter for each of the input boxes
 var i = 0;
 for (key in newCustomer) {
  if (newCustomer[key] == undefined) {
   if (key != "sharedAccountHolders") {
    // This adds value to the empty Customers object
    newCustomer[key] = inputs[i].value;
   } else {
    newCustomer[key] = inputs[i].value.split(",");
   }
   // Reset all the input values to empty string
   inputs[i].value = "";
   i++;
  }
 }
 // Add the new person to the array
 customerArr.push(newCustomer);
}
var submitBtn = document.querySelector("#submit");

// This is the listener for the submit button
submitBtn.addEventListener("click", createCustomer);

function displayAll() {
 var displayContainer = document.querySelector(".paraContainer");
 displayContainer.innerHTML = "";

 // Here we loop through all the objects in the personArr
 for (var i = 0; i < customerArr.length; i++) {
  // We create a new p tag
  var displayPara = document.createElement("p");

  // We call the getDeatils function for each object get a string and set the p tags innertext to the returned string
  displayPara.textContent = customerArr[i].displayDetails();

  //Append the new p tag to the displayContainer
  displayContainer.appendChild(displayPara);
 }
}
var displayBtn = document.querySelector("#displayBtn");

// This is the listener for the display all people button
displayBtn.addEventListener("click", displayAll);