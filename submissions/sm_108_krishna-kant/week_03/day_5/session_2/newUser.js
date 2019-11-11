// Assigning Variables
var name = "Krishna Kant Sharma";
var email = "asgaurdnation@gmail.com";
var password = "Cka0xns9an";

// Create user Object
function createUser(name, email, password) {
  var user = {};
  user.name = name;
  user.email = email;
  user.password = password;

  // returning Object
  return user;
}

// calling
console.log(createUser(name, email, password));
