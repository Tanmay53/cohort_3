var submit = document.getElementById("btn")
submit.addEventListener('click', login)
var user = null
function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var obj = {
        "email": email,
        "password": password
        
    }
    user = JSON.stringify(obj)

    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://reqres.in/api/login')
    xhr.setRequestHeader('Content-type', 'application/json;charset= utf-8')
    xhr.send(user)
    var res
    xhr.onload = function() {
        if(xhr.status== 200) {
            var result= JSON.parse(xhr.response)
            alert("Login successful")
            res = result.token
            console.log(result)
           var body =document.querySelector('body')
           var tok = document.querySelector('#token')
    


        var b = document.querySelector('button')
        var e =document.querySelector('#email')
        var p =document.querySelector('#password')
        var le =document.querySelector('#le')
        var lp =document.querySelector('#lp')
          b.remove();
          e.remove();
          p.remove();
          le.remove();
          lp.remove();


           body.appendChild(token)
           result = JSON.stringify(result)
           tok.textContent = "Token  :"+res;
        }
        else {
            alert("Invalid username or password")
            console.log(xhr.response)
        }
    }
}


// email and password
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }