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
    console.log(user)
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
function postData(file) {
    console.log(file)
    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/register",
        data: file,
        // success: success,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }
        // dataType: "json"
    })

        .done(function (msg) {
            console.log(msg);
        });
}



var btn = document.getElementById("submit")
btn.addEventListener("click", submitdata)