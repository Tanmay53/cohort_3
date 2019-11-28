
function registerUser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var description = document.getElementById('description').value;
    var uname = document.getElementById('uname').value;
    var pssd = document.getElementById('pssd').value;
    var result;
    
    var user = {
        "name": name,
        "email": email,
        "password": pssd,
        "username": uname,
        "mobile": mobile,
        "description": description
    }
    user = JSON.stringify(user);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/auth/register');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(user);

    xhr.onload = function() {
        result = JSON.parse(xhr.response);
        alert(result.message);
    }
}

submitBtn.addEventListener('click', registerUser);