var submit = document.getElementById("btn")
submit.addEventListener('click', login)

var user
function login() {
    var n = document.getElementById("name").value
    var p = document.getElementById("password").value
    var obj = {
        "username": n,
        "password": p
    }    
    user = JSON.stringify(obj)
    console.log(user)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json;charset= utf-8')
    xhr.send(user)
 
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log('check 4 ,200')
            alert("Done.!")
            var result = JSON.parse(xhr.response)
            document.getElementById("div1").style.display = "none"

            var body = document.querySelector("body")
            var div = document.createElement('div')
            div.textContent= result.token
            body.append(div)            
        }
        else {
            console.log('check 5, error')
            alert("The username or password was incorrect, please try again.!")
            var result2 = JSON.parse(xhr.response)
            console.log(result2)
        }
    }
}