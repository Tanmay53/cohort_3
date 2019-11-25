function register() {
    event.preventDefault();
    var userform = document.querySelector("form");
    sendReq(userform, displayRes);
}

function sendReq(userform, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("error", function() {
        alert("Request failed");
    });
    xhr.open("POST", "http://localhost:8080/auth/register");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    var user = {
        name: userform[0].value,
        email: userform[1].value,
        password: userform[2].value,
        username: userform[3].value,
        mobile: userform[4].value,
        description: userform[5].value
    };
    console.log(user);
    xhr.send(JSON.stringify(user));
    xhr.onload = function() {
        if (xhr.status == 200) {
            callback(xhr.response);
        }
    };
}

function displayRes(response) {
    var p = document.getElementById("display");
    response = JSON.parse(response);
    p.textContent = response.message;
    console.log("response: ", response);
}
