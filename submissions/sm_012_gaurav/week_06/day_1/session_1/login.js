var submitBtn = document.getElementById('loginBtn');
submitBtn.addEventListener('click',showData);

function displayData(obj) {
    var formDiv = document.querySelector('.row').querySelectorAll('.col-4')[1];
    var form = formDiv.querySelector('form');
    formDiv.removeChild(form);
    for (key in obj) {
        var p = document.createElement('p');
        p.textContent = key+" : "+obj[key];
        formDiv.appendChild(p);
    }
}

function fetchData(username,token) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8080/user/'+username);
    xhr.setRequestHeader('Authorization','Bearer '+token);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status === 200) {
            displayData(JSON.parse(xhr.response));
        }
        else {
            alert(JSON.parse(xhr.response)["message"]);
        }
    }
}

function showData(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username.length === 0 || password.length === 0) {
        alert("Please Fill all the details")
    }
    else {
        var obj = {"password":password, "username":username};
        var xhr = new XMLHttpRequest();
        xhr.open('POST','http://localhost:8080/auth/login');
        xhr.setRequestHeader('Content-type','application/json');
        xhr.onload = function() {
            if (xhr.status == 200) {
                fetchData(username, JSON.parse(xhr.response)['token']);
            }
        }
        xhr.onerror = function() {
            alert('username or password was incorrect, please try again!');
        }
        xhr.send(JSON.stringify(obj));
    }
}