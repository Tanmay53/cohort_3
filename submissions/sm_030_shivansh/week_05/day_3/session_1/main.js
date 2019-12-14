var data = [];


var btn1 = document.getElementById("signup");
var btn2 = document.getElementById("login");
var btnDash = document.getElementById("dash");

btn1.addEventListener("click", function () {

    getData();
    reset();
});

btn2.addEventListener("click", function () {

    login();
    reset();

});

btnDash.addEventListener("click", function () {
    setTimeout(function () {
        location.replace("index.html");
    }, 3000);
});


//getting signup data
function getData() {
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    var access = document.getElementById("access").value;

    //counter to  check whether the user name exits or not
    var count = 0;

    for (var i = 0; i < data.length; i++) {
        if (username == data[i].username) {
            alert("Username already used! \nPlease choose another user");
            count++;
            break;
        }
    }

    //if username does not exit only then  create the user
    if (count === 0)
        createObj(username, password, access);
}

// function to create user object
function createObj(username, password, access) {
    console.log("createobject")
    var obj = {
        username: username,
        password: password,
        access: access,
    }

    data.push(obj);
    alert("Registration Completed")
    console.log(data);
}

//function to reset
function reset() {
    document.getElementById("username1").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("access").value = "";

    document.getElementById("username2").value = "";
    document.getElementById("password2").value = "";

}

//function  to  check  the user login
function login() {

    var username = document.getElementById("username2").value;
    var password = document.getElementById("password2").value;

    var count = 0;

    for (var i = 0; i < data.length; i++) {

        if (username === data[i].username) {
            count++;
            if (password === data[i].password) {
                alert("Login Succesful");
                successLogin(username);
                break;
            }
            else {
                alert("Wrong Password");
                break;
            }
        }

    }

    if (count === 0)
        alert("Unregistered User");
}

// function success login
function successLogin(username) {
    location.replace("dash.html");
    var h1 = document.createElement("h1");

    h1.innerHTML = "Welcome " + username;
    var section = document.getElementById("section");
    section.appendChild(h1);

}

