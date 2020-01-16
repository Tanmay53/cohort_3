var submit = document.getElementById("btn")
submit.addEventListener("click", postData)

var person
function postData() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var username = document.getElementById("username").value
    var mobile = document.getElementById("mobile").value
    var description = document.getElementById("description").value

    var obj = {
        "name": name,
        "email": email,
        "password": password,
        "username": username,
        "mobile": mobile,
        "description": description
    }
    person = JSON.stringify(obj)

    if (name == "" || email == "" || password == "" || username == "" || mobile == "" || description == "") {
        alert("Please fill all the fields for successful registration..!")
    }
    else {
        var xhr = new XMLHttpRequest()

        xhr.open('POST', 'http://localhost:8080/auth/register')

        xhr.setRequestHeader('Content-type', 'application/json;charset= utf-8')

        xhr.send(person)
        xhr.onload = function () {
            if (xhr.status == 200) {
                var div = document.querySelector('#div2')
                var result = JSON.parse(xhr.response)
                alert(result.message)

                var body = document.querySelector('body')
                div.textContent = result.message
                body.append(div)
            }
            else {
                alert(xhr.response)
                console.log(xhr.status)
            }
        }
    }
}