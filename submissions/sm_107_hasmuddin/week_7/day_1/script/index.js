$("#submit").click(function() {
  var xhr = new XMLHttpRequest();
  var json = {};
  var email = $("#email").val();
  var pswd = $("#password").val();
  json["email"] = email;
  json["password"] = pswd;
  json = JSON.stringify(json);
  xhr.open("POST", "https://reqres.in/api/login");
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function() {
    if (xhr.status == 200) {
      callback(xhr.response);
      $("#form").hide();
    } else {
      $("#printpage").html("User not found");
    }
  };
  xhr.send(json);
});
function callback(responseData) {
  var data = JSON.parse(responseData);
  $("#printpage").text(`Token : ${data.token}`);
}
