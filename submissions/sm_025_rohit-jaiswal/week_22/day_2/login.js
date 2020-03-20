$('button').click(function (e) {
    e.preventDefault();
    var grocerID = $('#grocerID').val();
    var password = $('#password').val();
    var obj = {grocerID: grocerID, password: password};
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/login",
        data: JSON.stringify(obj),
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Content-Type","application/json");
        }
    }).done(function() {
        alert("Login Successful as Admin");
        location="form.html"
    }).fail(function() {
        alert("Wrong Entry");
    });
});

