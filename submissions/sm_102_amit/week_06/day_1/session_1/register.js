// add event listener to register button
var registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", registerUser);

// user constructor
function User(name, email, password, username, mobile, description) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.username = username;
  this.mobile = mobile;
  this.description = description;
}

// register user function
function registerUser() {
  event.preventDefault();
  var inputs = document.querySelectorAll(".input");
  var arr = [];
  for (var i = 0; i < inputs.length; i++) {
    arr.push(inputs[i].value);
  }
  // init an empty object
  var newUser = new User(...arr);
  newUser = JSON.stringify(newUser);

  // api calling using XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/auth/register");
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(newUser);
  xhr.onload = function() {
    if (xhr.status == 200) {
      errorHandler(xhr.response);
      console.table(xhr.response);
    } else {
      console.log("Error Code is:" + xhr.status);
    }
  };

  // empty input fields function
  emptyInputs(inputs);
}

// error handler
function errorHandler(res) {
  var response = JSON.parse(res);
  var alert = document.getElementById("alert");
  if (response.error == false) {
    alert.innerHTML =
      "<div class='alert alert-danger' role='alert'>" +
      response.message +
      "!</div>";
    setTimeout(function() {
      alert.style.display = "none";
    }, 3000);
  } else {
    alert.innerHTML =
      "<div class='alert alert-danger' role='alert'>" +
      response.message +
      "!</div>";
    setTimeout(function() {
      alert.style.display = "none";
    }, 3000);
  }
}

// function to empty input fields
function emptyInputs(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
