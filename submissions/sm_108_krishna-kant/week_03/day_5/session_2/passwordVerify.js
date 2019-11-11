// Initializing user object
var user = {
  name: "Krishna Kant Sharma",
  email: "asgaurdnation@gmail.com",
  password: "Cka0xns9an"
};
var inputPassword = "Cka0xns9an";

// Verifying Password
function checkPassword(obj, password) {
  if (obj.password === password) {
    return true;
  } else {
    return false;
  }
}

// Genrating Ouput
console.log(checkPassword(user, inputPassword));
