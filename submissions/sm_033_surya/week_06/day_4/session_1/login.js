function User(username, password) {
    this.password = password,
        this.username = username
}


function submitdata() {
    var username = document.getElementById("inputuserName").value
    var password = document.getElementById("inputPassword").value
    var user = new User(username, password)
    validateData(user)
}
function validateData(user) {
    var name = user.username
    var data = JSON.stringify(user)
    console.log(data)
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/login",
        data: data,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }
    })

        .done(function (msg) {
            console.log(msg);
            printData(msg, name)
        });
}
function printData(data, name) {
    console.log(data)
    var value = JSON.parse(data)
    var token = value.token
    console.log(token)

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/user/" + name,
        // data: data,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        }
    })

        .done(function (msg) {
            console.log(msg);
            var data = JSON.parse(msg)
            printValue(data)
        });
}
function printValue(data) {
    var divEle = document.querySelector(".form")
    divEle.setAttribute("class", "hidden")
    var output = ""
    var print = document.getElementById("profile")
    console.log(data)
    for (key in data) {
        output += key + ":" + data[key] + '\n'
        if (key == "description")
            break;
    }
    console.log(output)
    print.innerHTML = output
}

var submit = document.getElementById("submit")
submit.addEventListener("click", submitdata)