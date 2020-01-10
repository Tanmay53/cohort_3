function getData(display) {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("pwd").value
    var username = document.getElementById("user_name").value
    var mobile = document.getElementById("mobile").value
    var description = document.getElementById("desp").value

    var details = {
        name: name,
        email: email,
        password: password,
        username: username,
        mobile: mobile,
        description: description,
    }

    // for (key in details) {
    //     if (details.key == null || details.key == "") {
    //         alert('Please fill all the Fields')
    //         break
    //     }
    //     else {
    //         alert('Your response is recorded')
    //         break
    //     }
    // }

    details = JSON.stringify(details)

    var result = null;
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:8080/auth/register')

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(details)

    xhr.onload = function () {
        if (xhr.status == 200) {
            result = JSON.parse(xhr.response)
            display(result)
        }
        else {
            console.log('Error code id:' + xhr.status)
        }
    }

    xhr.onerror = function () {
        console.log("Error in HTTP Request!")
    }
}

var printUser = function (output) {
    var printData = document.getElementById('out')
    var para = document.createElement('h4')
    para.textContent = output['message']
    para.setAttribute('class', 'text-danger text-center font-weight-bold')
    printData.append(para)
}

var btn = document.getElementById("sub_mit")
btn.addEventListener('click', function () {
    getData(printUser)
})