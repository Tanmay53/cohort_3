function User(name, password) {
    this.email = name,
        this.password = password
}


$("#submit").click(function () {
    var userIn = $("#user").val()
    console.log($("#user").val())
    var passwordIn = $("#password").val()
    console.log($("#password").val())
    var name = new User(userIn, passwordIn)
    var data = JSON.stringify(name)
    console.log(data)
    var xhr = new XMLHttpRequest()
    xhr.open("POST", "https://reqres.in/api/login")
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data)
    xhr.addEventListener("error", function () {
        console.log("Error")
    })
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            var out = xhr.response
            displayResponse(out)
        }
        else {
            console.log("Error NUmber" + xhr.status)
        }
    })

})
function displayResponse(data) {
    var out = JSON.parse(data)
    console.log(out.token)
    $(".form").hide()
    $(".displayToken").html("Token :" + out.token)
}