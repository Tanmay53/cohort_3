$('button').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var grocerID = $('#grocerID').val();
    var password = $('#password').val();
    var mobile = $('#mobile').val();
    var obj = {name: name, email: email, password: password, grocerID: grocerID, mobile: mobile};
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/register",
        data: JSON.stringify(obj),
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Content-Type","application/json");
        }
    }).done(function() {
        alert("Register Successful as ADMIN ");
        location="login.html"
    }).fail(function() {
        alert("Registration ABORTED");
    });
});

