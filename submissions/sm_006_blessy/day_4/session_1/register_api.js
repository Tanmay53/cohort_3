$('#submit').click(function () {
    var os = $('#os').val();
    var user = {}

    user['name'] = $('#name').val();
    user['email'] = $('#email').val();
    user['password'] = $('#password').val();
    user['username'] = $('#username').val();
    user['mobile'] = $('#mobile').val();
    user['description'] = $('#description').val();
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/auth/register',
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done(function (data) {
            var datadis = JSON.parse(data);
            console.log(datadis)
            $('#displayDetails').text(datadis['message'])
        });
})