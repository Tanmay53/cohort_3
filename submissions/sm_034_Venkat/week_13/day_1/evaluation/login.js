var submit = document.getElementById("btn")
submit.addEventListener('click', login)
var user
function login() {
    var n = document.getElementById("name").value
    var p = document.getElementById("password").value
    var obj = {
        "password": p,
        "username": n
    }
    user = JSON.stringify(obj)

    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://reqres.in/api/login')

    xhr.setRequestHeader('Content-type', 'application/json;charset= utf-8')
    xhr.send(user)
    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            alert("Done.!")
            console.log(result.token)
            var body = document.querySelector("body")
            document.getElementById("div1").style.display = "none"
            var div = document.createElement('div')
            div.textContent = "Token is :  " + result.token
            body.append(div)

        }
        else {
            // alert("Sorry.!")
            var result2= JSON.parse(xhr.response)
            console.log(result2.error)
            alert("Sorry..! "+ result2.error)
        }
    }
}