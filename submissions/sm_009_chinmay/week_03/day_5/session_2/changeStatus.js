// Write a function which will accept a user object, value for status
// Each user will have a status property, and a credit limit property
// If there is no status property in the user, then return invalid input as response
// Status can have the following options : Basic, Premium, Platinum
// Basic user will have a credit limit of Rs. 80,000
// Premium user will have a credit limit of Rs. 3,00,000
// Platinum user will have a credit limit of Rs. 6,00,000
// Update the credit limit according to the new status
// return the new object

function changeStatus(userObj, statusValue) {

 // If there is no status property in the user, then return invalid input as response
 if (userObj.status == undefined) {
  console.log("Invalid input (there is no status property in the user)")
  return "Invalid input"
 }
 // Basic user will have a credit limit of Rs. 80,000
 else if (statusValue === "Basic") {
  userObj.status = statusValue
  userObj["credit limit"] = 80000
 }
 // Premium user will have a credit limit of Rs. 3,00,000
 else if (statusValue === "Premium") {
  userObj.status = statusValue
  userObj["credit limit"] = 300000
 }
 // Platinum user will have a credit limit of Rs. 6,00,000
 else if (statusValue === "Platinum") {
  userObj.status = statusValue
  userObj["credit limit"] = 600000
 }
 else {
  console.log("Please enter valid new status value")
 }

 console.log(userObj)
 // returning the new object
 return userObj
}

// User Object
var userObj = {
 name: "Test User",
 status: "Basic",
 "credit limit": "",
}

// Status Value
var statusValue = "Platinum"

// Invoking function
changeStatus(userObj, statusValue)