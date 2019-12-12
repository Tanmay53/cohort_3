function reg() {
    var input = $('.inputs')
    var obj = {
        name: $(input[0]).val(),
        email: $(input[1]).val(),
        password: $(input[2]).val(),
        username: $(input[3]).val(),
        mobile: $(input[4]).val(),
        description: $(input[5]).val()
    }
    console.log(obj)
    var dataout = JSON.stringify(obj)
    console.log(dataout)
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/auth/register',
        data: dataout ,
        dataType: 'json',
        contentType: 'application/json'
    })
        .done(function (data) {
            console.log(data)
        })
}

$('#register').on('click', reg)