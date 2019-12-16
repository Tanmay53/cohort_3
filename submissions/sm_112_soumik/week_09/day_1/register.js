// taking input on click
$("#btnLogin").click(function() {
  var logEmail = $("#loginEmail").val();
  var logPass = $("#loginPassword").val();
  login(logEmail, logPass);
});
// passing the value
function login(email, pass) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/register");
  //   header file
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  data = {};
  data.email = email;
  data.password = pass;
  data = JSON.stringify(data);
  xhr.send(data);
  xhr.onload = function() {
    if ((xhr.status = 200)) {
      var response = JSON.parse(xhr.response);
      var token = response.token;
      $("#form").hide();
      $("#token").append("<p>" + token + "</p>");
    } else {
      console.log(xhr.response);
    }
  };
}
