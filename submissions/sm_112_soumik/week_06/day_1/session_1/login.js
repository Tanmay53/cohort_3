function loginCred(password, username) {
  this.password = password;
  this.username = username;
}
function login() {
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;
  var newUser = new loginCred(password, username);
  var data = JSON.stringify(newUser);
  console.log(data);

  if (password !== "" || username !== "") {
    xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/auth/login");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(data);
    xhr.onload = function() {
      if ((xhr.status = 200)) {
        var response = JSON.parse(xhr.response);
        var token = response.token;
        auth(token, username);
      }
    };
  } else {
    alert("fill the form");
  }
}
function auth(token, user) {
  var xhrAuth = new XMLHttpRequest();
  console.log(user);
  xhrAuth.open("GET", "http://localhost:8080/user/" + user);
  xhrAuth.setRequestHeader("Authorization", " Bearer " + token);
  xhrAuth.send();
  xhrAuth.onload = function() {
    if ((xhr.status = 200)) {
      console.log("Hello", xhr.response);
    } else {
      xhr.response;
    }
  };
}
