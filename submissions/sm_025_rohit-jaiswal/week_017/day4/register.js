$('button').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var username = $('#username').val();
    var password = $('#password').val();
    var mobile = $('#mobile').val();
    var description = $('#description').val();
    var obj = {name: name, email: email, password: password, username: username, mobile: mobile, description: description};
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/register",
        data: JSON.stringify(obj),
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Content-Type","application/json");
        }
    }).done(function() {
        alert("Register Successful, you'll to teleported to Login Page now");
        location="login.html"
    }).fail(function() {
        alert("Registration failed, user already exists");
    });
});

