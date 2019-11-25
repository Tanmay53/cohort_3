var name =document.getElementById("name").value
var email = document.getElementById("email").value;
var pass = document.getElementById("password").value;
var username = document.getElementById("password").value;
var mobile = document.getElementById("email").value;
var desc =document.getElementById("name").value
function signUp() {
  var xhr = new XMLDocument();
  xhr.open("POST", "http://localhost:8080//auth/register",);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(obj)
  xhr.onload=function(){
    var
  }

}
