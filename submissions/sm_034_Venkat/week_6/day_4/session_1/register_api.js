$("#submit").click(function () {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var username = document.getElementById("username").value
    var mobile = document.getElementById("mobile").value
    var description = document.getElementById("description").value

    var obj = {
        name: name,
        email: email,
        password: password,
        username: username,
        mobile: mobile,
        description: description
    }
    var person = JSON.stringify(obj)

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/auth/register",
        data: person,
        contentType: "application/json"

    })
        .done(function (data) {
            alert('Done.!')
            let output = JSON.parse(data)
            console.log(data);
        });
});

$("#reset").click(function () {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("username").value = ""
    document.getElementById("mobile").value = ""
    document.getElementById("description").value = ""
})