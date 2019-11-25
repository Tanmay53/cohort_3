// UI Varaibles
var fname;
var username;
var email;
var password;
var mobileno;
var desc;
var regForm;
var messageAlert;

// Initialize Variables
function loadUI() {
  fname = document.getElementById("name");
  username = document.getElementById("username");
  email = document.getElementById("email");
  password = document.getElementById("password");
  mobileno = document.getElementById("mobile");
  desc = document.getElementById("desc");
  regForm = document.getElementById("regform");
  messageAlert = document.getElementById("message");
}

// User Contructor
function User(name, email, password, username, mobile, desc) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.username = username;
  this.mobile = mobile;
  this.description = desc;
}

// Loading Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  loadUI();
  regForm.addEventListener("submit", createUser);
});

// Create User
function createUser(e) {
  var user = new User(
    fname.value,
    email.value,
    password.value,
    username.value,
    mobileno.value,
    desc.value
  );
  e.preventDefault();
  var url = "http://localhost:8080/auth/register";
  getData(user, showResult, url);
}
function getData(user, callBack, url) {
  var xhr = new XMLHttpRequest();
  user = JSON.stringify(user);
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
  xhr.onload = function() {
    if (xhr.status == 200) {
      callBack(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(user);
}

// Showing Alerts
function showResult(responseData) {
  console.log(responseData);
  if (!responseData.error) {
    messageAlert.innerText = responseData.message;
    messageAlert.classList.remove("hidden");
    messageAlert.classList.add("visible");
    messageAlert.classList.add("alert-success");
  } else {
    messageAlert.innerText = responseData.message;
    messageAlert.classList.remove("hidden");
    messageAlert.classList.add("visible");
    messageAlert.classList.add("alert-danger");
  }
}
