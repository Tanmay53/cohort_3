$("#regSubmitBtn").click(() => {
    let info = {
        "name": $("#name").val(),
        "email": $("#email").val(),
        "password": $("#password").val(),
        "username": $("#username").val(),
        "mobile": $("#mobile").val(),
        "description": $("#matter").val()
    }
    console.log(info)
    newRegistration(info)
})

newRegistration = (obj) => {
    let person = JSON.stringify(obj)

    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json;charset= utf-8')
    xhr.send(person)
    xhr.onload = function () {
        if (xhr.status == 200) {
            var result = JSON.parse(xhr.response)
            alert(result.message)
        }
        else {
            alert(xhr.response)
            console.log(xhr.status)
        }
    }
}


$("#loginBtn").click(() => {
    let data = {
        "username": $("#loginName").val(),
        "password": $("#loginPassword").val()
    }
    console.log(data)
    checkUserData(data)
})

checkUserData = (obj) => {
    let user = JSON.stringify(obj)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json;charset= utf-8')
    xhr.send(user)

    xhr.onload = function () {
        if (xhr.status == 200) {
            alert("Done.!")
            let result = JSON.parse(xhr.response)
            console.log(result)
            window.location.href = "form.html";

        }
        else {
            console.log('check 5, error')
            alert("The username or password was incorrect, please try again.!")
            let result = JSON.parse(xhr.response)
            console.log(result)
        }
    }
}