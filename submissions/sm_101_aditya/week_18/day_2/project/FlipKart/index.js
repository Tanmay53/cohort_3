function user(name, email, password, username, mobile, description) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.mobile = mobile;
    this.description = description;
  }
  function signup() {
    event.preventDefault();
    var name = $("#name").val()
    var email = $("#email").val()
    var username = $("#username").val()
    var password = $("#password").val()
    var mobile = $("#mobile").val()
    var description = $("#description").val()
    var newUser = new user(name, email, password, username, mobile, description);
    var data = JSON.stringify(newUser);
    if (
      newUser.name !== "" ||
      newUser.email !== "" ||
      newUser.username !== "" ||
      newUser.password !== "" ||
      newUser.mobile !== "" ||
      newUser.description !== ""
    ) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:8080/auth/register");
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.send(data);
      xhr.onload = function() {
          
        if ((xhr.status = 200)) {
            alert("Registration Successful")
          console.log(xhr.status);
          console.log(xhr.response)
          window.location.href = "login.html"
        } else {
          xhr.response;
          alert("failed")
          console.log(xhr.response)
        }
      };
    } else {
      alert("Please fill all the fields");
    }
  }