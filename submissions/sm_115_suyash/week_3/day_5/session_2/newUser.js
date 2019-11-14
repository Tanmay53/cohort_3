var name = "Suyash Mishra";
var email = "sam882@gmail.com";
var password = "Cksibn@882";

// FUNCTION FOR USER
function myUser(myname, myemail, mypassword) {
  user = {};
  user.name = myname;
  user.email = myemail;
  user.password = mypassword;
  return user;
}
console.log(myUser(name,email,password))