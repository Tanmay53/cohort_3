function login() {
    event.preventDefault();
    var username = document.getElementById("username").value;

    var password = document.getElementById("password").value;
    console.log(username, password);
    getUserData(username, password, getToken);
}

function getUserData(username, password, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("error", function() {
        alert("Request failed");
    });
    xhr.open("POST", "https://reqres.in/api/login");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    var user = {
        password: password,
        username: username
    };
    xhr.send(JSON.stringify(user));
    xhr.onload = function() {
        if (xhr.status == 200) {
            callback(xhr.response, username);
        } else alert("OOps Please enter valid username and password.");
    };
}

function getToken(response, username) {
    response = JSON.parse(response);
    console.log(response.token);
    var body = document.querySelector("body");
    body.innerHTML = "";
    var p = document.createElement("p");
    p.textContent = "Login token :" + response.token;
    body.appendChild(p);
}
