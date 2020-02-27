var btn = document.querySelector("#btn")
btn.addEventListener("click", checkData)
var details

function checkData() {
    var name = document.getElementById("name").value
    var email = document.getElementById("mail").value
    var pass = document.getElementById("passwd").value
    var user = document.getElementById("user").value
    var mobilenumber = document.getElementById("mobnum").value
    var description = document.getElementById("desc").value
    var obj = {
        "name": name,
        "email": email,
        "password": pass,
        "username": user,
        "mobile": mobilenumber,
        "description": description
    }
    console.log(obj)
    details = JSON.stringify(obj)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8')
    xhr.send(details)
    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            console.log(result)
            var body = document.querySelector('body')
            var div = document.createElement('div')
            if(result.error == "true") {
                alert("success")
                var h3 = document.createElement("h3")
                h3.textContent = result.message
                h3.style.textAlign = "center"
            }
            else {
                alert("user aleady exists")
                var h3 = document.createElement("h3")
                h3.textContent = result.message;
                h3.style.textAlign = "center"
                div.appendChild(h3)
            }
            body.appendChild(div)
        }
    }
}