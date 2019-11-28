function User(name, email, password, username, mobile, desc) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.mobile = mobile;
    this.description = desc;
}

var submitBtn = document.getElementById('submitBtn');

function registerUser(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var mobile = document.getElementById('mobile').value;
    var desc = document.getElementById('desc').value;
    if (name.length == 0 || email.length == 0 || password.length == 0 || username.length == 0 || mobile.length == 0 || desc.length == 0) {
        alert("Please Fill all the details");
    }
    else {
        var userObj = new User(name, email, password, username, mobile, desc);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "http://localhost:8080/auth/register");
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(userObj));
        xhr.onload = function () {
            if (xhr.status === 200) {
                var result = JSON.parse(xhr.response);
                if (result["error"]) {
                    alert(result['message']);
                }
                else {
                    alert(result['message']);
                }
            }
            else {
                alert("The error code is " + xhr.status);
            }
        }
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('username').value = '';
        document.getElementById('mobile').value = '';
        document.getElementById('desc').value = '';
    }
}

submitBtn.addEventListener('click', registerUser);