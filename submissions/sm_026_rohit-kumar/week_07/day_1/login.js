function test() {
    alert('Hello world')
}
/*
xhr.open('POST', 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('content-type', 'application/json;charset=utf-8')
    json = JSON.stringify(obj)
    xhr.send(json)

    //al
*/
function authenticate(username, password) {
    //alert('user = ' + username + " password = " + password)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://reqres.in/api/login')
    xhr.setRequestHeader('content-type', 'application/json;charset=utf-8')
    var obj = {
            "email": username,
            "password": password
        }
    json = JSON.stringify(obj)

    xhr.onload = function() {
        if(xhr.status == 200) {
            //return xhr.response
            obj = JSON.parse(xhr.response)
            $('#token').html( 'Token : ' + obj['token'])
            $('#wrapper').hide()
        }
    }
   
    xhr.send(json)

}