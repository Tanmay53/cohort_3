$('#submit').click(function () {
    var userdetails = {}
    userdetails['name'] = $('#name').val();
    userdetails['password'] = $('#password').val();
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/auth/login',
        data: JSON.stringify(userdetails),
        contentType: "application/json",

    })

        .done(function (data) {
            var datadisplay = JSON.parse(data);
            console.log(datadisplay)
            $('#displayDetails').text(datadisplay['message'])

        });
})