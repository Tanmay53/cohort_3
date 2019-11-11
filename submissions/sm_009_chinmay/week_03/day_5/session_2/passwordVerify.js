// Write a function which will accept a user object, and a password as arguments
// Check if the users password and the password is matching
// return true if its a match, else false

function passwordVerify(obj, pwd) {
 // Checking if the users password and the password is matching
 if (obj.password === pwd) {
  console.log("Mathching Password")
  return true
 }
 else {
  console.log("Password Not Mathching")
  return false
 }
}

var userObj = {
 name: 'Chinmay',
 email: 'chinmay@masai.com',
 password: 'test@234'
}

pwd = "test@1234"

// Invoking function
passwordVerify(userObj, pwd)