var username;
var password;
var loginForm;
var messageAlert;
var profile;
// lOAD ui
function loadUI() {
  username = document.getElementById("username");
  password = document.getElementById("password");
  loginForm = document.getElementById("loginform");
  messageAlert = document.getElementById("message");
  profile = document.getElementById("profile");
}

// Login Constructor
function login(username, password) {
  this.password = password;
  this.username = username;
}

document.addEventListener("DOMContentLoaded", function() {
  loadUI();
  loginForm.addEventListener("submit", loginUser);
});

function loginUser(e) {
  e.preventDefault();
  var loginAuth = new login(username.value, password.value);
  var url = "http://localhost:8080/auth/login";
  validateUser(loginAuth, url, showProfile);
}

function validateUser(loginAuth, url, callback) {
  var xhr = new XMLHttpRequest();
  loginAuth = JSON.stringify(loginAuth);
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
  xhr.onload = function() {
    if (xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
    } else if (xhr.status == 401) {
      messageAlert.innerText = JSON.parse(xhr.responseText).message;
      messageAlert.classList.remove("hidden");
      messageAlert.classList.add("visible");
      messageAlert.classList.add("alert-danger");
      setTimeout(function() {
        messageAlert.classList.add("hidden");
        messageAlert.classList.remove("visible");
      }, 3000);
    }
  };
  xhr.send(loginAuth);
}

// Show Profile
function showProfile(responseData) {
  console.log(responseData);
  if (!responseData.error) {
    messageAlert.innerText = "Login Succesfull";
    messageAlert.classList.remove("hidden");
    messageAlert.classList.add("visible");
    messageAlert.classList.add("alert-success");
    messageAlert.classList.remove("alert-danger");
  }
  var url = `http://localhost:8080/user/${username.value}`;
  console.log(url);
  var token = responseData.token;
  setTimeout(function() {
    fetchProfile(url, token, viewProfile);
  }, 2000);
}

// Fetch Profile
function fetchProfile(url, token, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("Authorization", "Bearer " + token);
  xhr.onload = function() {
    if (xhr.status == 200) {
      if (!JSON.parse(xhr.responseText).error) {
        callback(JSON.parse(xhr.responseText));
      }
    }
  };
  xhr.send();
}

// View Profile
function viewProfile(data) {
  profile.innerHTML = "";
  var ul = document.createElement("ul");
  ul.classList.add("list-group");
  for (key in data) {
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${key} : ${data[key]}`;
    ul.appendChild(li);
  }
  profile.appendChild(ul);
}
