

function getData() {
    inputName = document.getElementById("iName").value
inputEmail = document.getElementById("iEmail").value
inputPassword = document.getElementById("iPass").value
inputUsername = document.getElementById("iUserN").value
inputMobile = document.getElementById("iMobile").value
inputDescription = document.getElementById("iDescription").value


obj = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
    username: inputUsername,
    mobile: inputMobile,
    description: inputDescription,
}
    console.log(obj)
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify(obj)
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            var msg = JSON.parse(xhr.response)
            alert(msg['message'])
        } else {
            console.log(xhr.status)
            alert(xhr.status)
        }
    })
    xhr.open("POST", "http://localhost:8080/auth/register")
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(json)
}

// iSignUp.addEventListener("click",getData)

iSignUp.addEventListener("click", function () {
    var flagx = "true"
    var all = document.querySelectorAll(".inputT")
    console.log(all)
    for (i = 0; i < all.length; i++) {
        if (all[i].value == "") {
            alert("Kindly fill all details properly")
            flagx = "false"
        }
    }
    if (flagx == "true") {
        getData()
    }
    console.log(flagx)
})

formP.addEventListener("submit", function () {
    event.preventDefault();
})