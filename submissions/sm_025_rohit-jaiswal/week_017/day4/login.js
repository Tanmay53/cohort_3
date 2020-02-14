$('button').click(function (e) {
    e.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();
    var obj = {username: username, password: password};
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/login",
        data: JSON.stringify(obj),
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Content-Type","application/json");
        }
    }).done(function() {
        alert("Login Successful, You'll be re-directed to From Page");
        location="form.html"
    }).fail(function() {
        alert("Wrong Entry, PS Try Again");
    });
});

