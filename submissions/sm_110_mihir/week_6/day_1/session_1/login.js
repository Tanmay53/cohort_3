function login() {
    event.preventDefault();
    var username = document.getElementById("username").value;

    var password = document.getElementById("password").value;
    console.log(username, password);
    getUserData(username, password, getProfile);
}

function getUserData(username, password, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("error", function() {
        alert("Request failed");
    });
    xhr.open("POST", "http://localhost:8080/auth/login");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    var user = {
        password: password,
        username: username
    };
    xhr.send(JSON.stringify(user));
    xhr.onload = function() {
        if (xhr.status == 200) {
            callback(xhr.response, username);
        } else callback(xhr.status, username);
    };
}

function getProfile(response, username) {
    console.log(response, username);
    displayProfile(response, username);
}

function displayProfile(response, username) {
    response = JSON.parse(response);
    console.log(response.token);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user/" + username);
    xhr.setRequestHeader("Authorization", "Bearer " + response.token);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            console.log(xhr.response);
            printDetails(JSON.parse(xhr.response));
        } else console.log(xhr.status);
    };
}

function printDetails(response) {
    var body = document.querySelector("body");
    body.innerHTML = "";
    var ul = document.createElement("ul");
    ul.className = "list-group";
    for (keys in response) {
        if (keys == "token") continue;
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = keys + " : " + response[keys];
        ul.appendChild(li);
    }
    body.appendChild(ul);
}
