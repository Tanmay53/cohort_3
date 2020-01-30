function submit() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var details = {
        email: email,
        password: password
    }

    details = JSON.stringify(details)
    console.log(details)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://reqres.in/api/login")
    xhr.setRequestHeader('Content-type',
        'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            console.log('success')

        }
        else {
            console.log("error code is:xhr.status")
        }

        var result = JSON.parse(xhr.response)
        console.log(result)
        hideData(result)
    }
    function hideData(result) {

        var result = result.token
        document.getElementById("hide").style.display = "none"
        var body = document.querySelector("body")
        var h1 = document.createElement("h1")
        h1.textContent = "Token value  is:" + result
        body.appendChild(h1)
    }

    xhr.send(details)



}