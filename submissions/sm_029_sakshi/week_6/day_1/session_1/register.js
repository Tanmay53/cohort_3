function onSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    var description = document.getElementById("description").value;
    var newUser = new user(name, email, password, username, mobile, description);
    var data = JSON.stringify(newUser);
    console.log(data);
  
    if (newUser.name!=" " ||newUser.email!=" " || newUser.password!=" " || newUser.username!=" " || newUser.mobile!=" " || newUser.description!=" " )
    {
        var xhr = new XMLHttpRequest();
        xhr.open("POST","http://localhost:8080/auth/register");
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.send(data);
        xhr.onload = function() {
          if ((xhr.status = 200)) {
            console.log(xhr.response);
            displayData(xhr.response)
          } 
        };
    }
       else {
        alert("Please fill all the fields");
      }
    }
    
 
    function displayData(response)
    {
      res = JSON.stringify(response)
      respon = document.getElementById('finalresponse')
      respon.innerHTML=res
    }

function user(name, email, pass, username, mobile, description) {
    this.name = name;
    this.email = email;
    this.password = pass;
    this.username = username;
    this.mobile = mobile;
    this.description = description;
  }