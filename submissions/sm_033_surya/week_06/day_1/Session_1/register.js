function User(name, email, password, username, mobile, description) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.mobile = mobile;
    this.description = description;
}
function submitdata() {

    var name = document.getElementById("nameInput").value
    var email = document.getElementById("emailInput").value
    var username = document.getElementById("userNameInput").value
    var password = document.getElementById("passwordInput").value
    var mobile = document.getElementById("mobileInput").value
    var description = document.getElementById("descriptionInput").value
    var user = new User(name, email, password, username, mobile, description)
    var value = Object.values(user)
    for (i = 0; i < value.length; i++) {
        if (value[i] == "") {
            alert("Pleae Fill all Detais")
            break
        }
        else {
            var data = JSON.stringify(user)
            postData(data)
        }
    }
}
function postData(data) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            console.log(xhr.status)
        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    })
    xhr.addEventListener("error",function(){
        alert("Error in HTTP request!")
    })
    xhr.open("POST", 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    console.log(data)
    xhr.send(data);
}

var btn = document.getElementById("submit")
btn.addEventListener("click", submitdata)
