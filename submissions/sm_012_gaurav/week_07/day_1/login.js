var loginBtn = document.getElementById('loginBtn');
var container = document.querySelector('.container');

loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var obj = {"email":email, "password":password};
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login');
    xhr.setRequestHeader("Content-type","application/json");
    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.response);
            displayToken(data["token"]);
        }
        else {
            alert("The error code is: "+xhr.status);
        }
    }
    xhr.send(JSON.stringify(obj));
    
});

function displayToken(token) {
    var div = document.querySelector('.col-4');
    var form = document.querySelector('.col-4 form');
    div.removeChild(form);
    var h1 = document.createElement('h1');
    h1.textContent = token;
    div.appendChild(h1);
}

