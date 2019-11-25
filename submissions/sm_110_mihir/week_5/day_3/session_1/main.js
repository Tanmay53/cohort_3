if (localStorage.getItem("visitors") != null)
    var visitors = JSON.parse(localStorage.getItem("visitors"));
else var visitors = {};
var users = [];
var valid = false;

function login() {
    event.preventDefault();
    var person = {};
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loadVal = JSON.parse(localStorage.getItem("users"));
    person.username = username;
    person.password = password;
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var sec = date.getSeconds();
    // console.log(visitors.username);
    if (visitors[username] == undefined) visitors[username] = [];

    visitors[username].push(minutes);
    console.log(visitors);

    console.log(loadVal);
    personStr = JSON.stringify(person);
    var userStr = JSON.stringify(loadVal);
    if (userStr.includes(personStr)) {
        valid = true;
        sessionStorage.setItem("sessionUser", username);
        sessionStorage.setItem("sessionPass", password);

        if (sessionStorage.getItem("minutes") == null) {
            sessionStorage.setItem("hour", hour);
            sessionStorage.setItem("minutes", minutes);
            sessionStorage.setItem("endTime", minutes + 5);
        }

        window.location.href = "dash.html";
    } else {
        alert("Wrong Username");
    }

    visitorStr = JSON.stringify(visitors);
    localStorage.setItem("visitors", visitorStr);
}

function signup() {
    event.preventDefault();
    var person = {};
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    person.username = username;
    person.password = password;
    userStr = JSON.stringify(users);
    personStr = JSON.stringify(person);
    if (userStr.includes(personStr)) {
        alert("userd already signed up");
    } else {
        users.push(person);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);
    }
}
