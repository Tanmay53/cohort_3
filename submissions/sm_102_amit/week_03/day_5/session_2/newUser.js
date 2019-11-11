// function to create new user
function newUser(name, email, password) {
  var userObj = {};
  userObj.name = name;
  userObj.email = email;
  userObj.password = password;

  return userObj;
}

// input
var name = "Amit Kumar";
var email = "amit@gmail.com";
var password = "123456";

// output
console.log(newUser(name, email, password));
