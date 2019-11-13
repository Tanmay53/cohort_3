// Write a function which takes name, email and password as arguments
// return an Object of the new user

function newUserFunction(nameInput, emailInput, passwordInput) {

 var newUser = new Object()
 newUser.name = nameInput
 newUser.email = emailInput
 newUser.password = passwordInput

 console.log(newUser)
 return newUser
}

// Invoking Function
newUserFunction("Chinmay", "chinmay@masai.com", "test@123")