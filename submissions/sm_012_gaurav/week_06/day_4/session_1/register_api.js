function User(name, email, password, username, mobile, desc) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.mobile = mobile;
    this.description = desc;
}

$('button').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var username = $('#username').val();
    var mobile = $('#mobile').val();
    var desc = $('#desc').val();
    var userObj = new User(name, email, password, username, mobile, desc);
    var ajaxObj = { method: "POST", url: "http://localhost:8080/auth/register", data: JSON.stringify(userObj), beforeSend: function (xhr) { xhr.setRequestHeader("Content-type", "application/json"); } };
    $.ajax(ajaxObj).done(function (response) {
        response = JSON.parse(response);
        alert(response.message);
    }).fail(function () {
        alert("Error Occured!!!");
    });
});