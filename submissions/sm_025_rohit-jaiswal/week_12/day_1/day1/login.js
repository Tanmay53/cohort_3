function authenticate(username, password) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://reqres.in/api/login')
    xhr.setRequestHeader('content-type', 'application/json;charset=utf-8')
    var obj = {
        "email": username, //eve.holt@reqres.in
        "password": password //cityslicka
    }
    json = JSON.stringify(obj)

    xhr.onload = function() {
        if (xhr.status == 200) {
            obj = JSON.parse(xhr.response)
            $('#token').html('Your Unique Token is : ' + obj['token']) //expected:QpwL5tke4Pnpja7X4
            $('#toBeHide').hide()
        }
    }

    xhr.send(json)

}