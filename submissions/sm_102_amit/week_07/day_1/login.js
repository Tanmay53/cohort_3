$(document).ready(function() {
  var ui = `<div class="container p-5">
              <div class="row">
                <div class="col-md-6 offset-md-3 bg-light p-5">
                  <h5 class="text-center text-uppercase font-weight-bold">
                    User Login
                  </h5>

                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      class="form-control input"
                      id="username"
                      placeholder="Username"
                    />
                  </div>

                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control input"
                      id="password"
                      placeholder="Password"
                    />
                  </div>

                  <hr />
                  <button type="button" class="btn btn-success btn-block" id="loginBtn">
                    Login !
                  </button>
                </div>
              </div>
            </div>`;
  $("#body").append(ui);

  $("#loginBtn").click(function() {
    var username = $("#username").val();
    var password = $("#password").val();
    // alert(username);
    var data = {
      email: username,
      password: password
    };
    // {
    //   "email": "eve.holt@reqres.in",
    //   "password": "cityslicka"
    // }
    var data = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/login/");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.onload = function() {
      console.log(xhr.status);
      if (xhr.status == 200) {
        output(xhr.response);
        console.table(xhr.response);
      } else {
        console.log(xhr.status);
        alert("Error:" + xhr.status);
      }
    };
  });

  function output(res) {
    var response = JSON.parse(res);
    console.log(response);
    $("#body").empty();
    $("#body").append(
      `<div class="alert alert-success" role="alert">${response.token}</div>`
    );
  }
  function validate(username, password) {
    return true;
  }
});
