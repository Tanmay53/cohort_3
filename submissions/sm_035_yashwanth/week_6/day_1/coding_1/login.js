var submit = document.getElementById("btn")
submit.addEventListener('click', login)
var user
function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var obj = {
        "username": username,
        "password": password    
    }
    JSON.stringify(obj)

    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json;charset= utf-8')
    xhr.send(JSON.stringify(obj))
    xhr.onload = function() {
        if(xhr.status== 200) {
           var result= JSON.parse(xhr.response)
            alert("Login successful")
            console.log(result)
            var output = result.token
            var body =document.querySelector('body')
            var tok = document.querySelector('#token')
            var u =document.querySelector('#username')
            var p =document.querySelector('#password')
            var lu =document.querySelector('#lu')
            var lp =document.querySelector('#lp')
            var b = document.querySelector('button')
            b.remove();
            u.remove();
            p.remove();
            lu.remove();
            lp.remove();

            body.appendChild(token)
            result = JSON.stringify(result)
            tok.textContent = "Token  :"+output;
        }
        else {
            alert("Invalid username or password")
            console.log(xhr.response)
        }
    }
}
