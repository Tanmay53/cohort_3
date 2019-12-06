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
    }).done(function(response) {
        response = JSON.parse(response);
        getData(username, response.token);
    }).fail(function() {
        alert("The username or password was incorrect, please try again!");
    });
});

function getData(username, token) {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/user/"+username,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer "+token);
        }
    }).done(function(response) {
        response = JSON.parse(response);
        showData(response);
    }).fail(function() {
        alert("Error Occured!!!");
    });
}

function showData(obj) {
    $('.col-4').empty();
    var name = document.createElement('h2');
    $(name).text(obj.name);
    var email = document.createElement('h2');
    $(email).text(obj.email);
    var username = document.createElement('h2');
    $(username).text(obj.username);
    var mobile = document.createElement('h2');
    $(mobile).text(obj.mobile);
    var desc = document.createElement('h2');
    $(desc).text(obj.description);
    $('.col-4').append(name);
    $('.col-4').append(email);
    $('.col-4').append(username);
    $('.col-4').append(mobile);
    $('.col-4').append(desc);
}