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
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data)
    xhr.onload = function () {
        if (xhr.status <= 401) {
            printData(xhr.response, name)
        }
        else {
            console.log("Error id is " + xhr.status)
        }
    }
}
function printData(data, name) {
    var value = JSON.parse(data)
    var token = value.token
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/user/" + name
    xhr.open('GET', url)
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.send()
    xhr.onload = function () {
        if (xhr.status <= 401) {
            var data = JSON.parse(xhr.response)
            return printValue(data)
        }
        else {
            console.log("Error code is" + xhr.status)
        }
    }
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