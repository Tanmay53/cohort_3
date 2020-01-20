function user(username, password) {
    this.username = username;
    this.password = password;
  }


//   ----------------function for submit-----------------

function onSubmit(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var newuser = new user(username, password)
    datavalidation(newuser)
}



function datavalidation(newuser)
{
    var name=newuser.username
    var data = JSON.stringify(newuser);
    console.log(data);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/auth/login");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(data);
    xhr.onload = function() {
      if ((xhr.status == 200))
       {
        var response = JSON.parse(xhr.response);
        console.log(xhr.response)
        var token = response.token;
        auth(token, name);
       }
       else {
        console.log("Error id is " + xhr.status)
       }
    };

}
function auth(token,name)
{
    var xhr = new XMLHttpRequest();
    console.log(name);
    xhr.open("GET", "http://localhost:8080/user/" + name);
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.send();
    xhr.onload = function() {
      if ((xhr.status == 200)) {
        displayData(xhr.response)
      } 
    };

}

function displayData(response)
{
  res = JSON.stringify(response)
  respon = document.getElementById('finalresponse')
  respon.innerHTML=res
}
 



