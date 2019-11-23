var username = document.getElementById("userup");
var fname = document.getElementById("nameup");
var password = document.getElementById("passwordup");
var button = document.getElementById("submitup");

function addUser() {
  var user = {
    fullname: fname.value,
    user: username.value,
    userpassword: password.value,
    heello: "hello"
  };
  event.preventDefault();
  localStorage.setItem(username.value, JSON.stringify(user));
  alert("User Registered Successfully");
  console.log(JSON.parse(localStorage.getItem(username.value)));
}
