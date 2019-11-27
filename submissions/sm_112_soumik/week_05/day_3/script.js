var btn = document.getElementById("submit");
user = [];
function redirect() {
  var userName = document.getElementById("name").value;
  var passWord = document.getElementById("password").value;
  var userOb = {};
  userOb = {
    username: userName,
    password: passWord
  };
  user.push(userOb);
  localStorage.setItem("userData", JSON.stringify(user));
}
function login() {
  var usernew = document.getElementById("nameL").value;
  var passnew = document.getElementById("passwordL").value;
  var data = localStorage.getItem("userData");
  data = JSON.parse(data);
  console.log(data);
  data.forEach(function(ele) {
    if (ele.username == usernew && ele.password == passnew) {
      location = "dash.html";
      alert("passed");
    } else alert("Invalid username or password");
  });
  var ls = window.localStorage;
  var isLoggedin = ls.getItem("login");
  if (isLoggedin === null) {
    var new_Login = Date.now();
    var login_time = new Date(new_Login);
    ls.setItem("login", login_time);
    ls.setItem("timeout", 5);
  } else {
    last_logged_in = ls.getItem("login");
  }
}
var current_time = new Date(Date.now());
var current_minutes = current_time.getMinutes();
if (last_logged_in !== undefined) {
  last_session = new Date(last_logged_in);
}
if (current_minutes > last_session.getMinutes()) {
  ls.setItem("login", "");
}
