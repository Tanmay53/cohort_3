// function to match password as argument and user object password
function passwordVerify(userObj, password) {
  if (password.length == 0) {
    return "Password is empty!";
  } else {
    if (userObj.password == password) {
      return "Password Matches!";
    } else {
      return "Password did not match!";
    }
  }
}

// input
user = {
  name: "Amit Kumar",
  password: "123654"
};
var password = 123654;

// output
console.log(passwordVerify(user, password));
