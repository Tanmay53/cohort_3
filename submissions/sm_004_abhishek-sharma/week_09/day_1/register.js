var display = document.getElementById("displayToken")
var registerForm = document.getElementById('registerForm')
//Sends form data to the server as a JSON
function sendData(objData) {
    var result = null, obj = null;
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify(objData);

    xhr.addEventListener('load', function () {
        if (xhr.status < 400) {
            console.log(xhr.response)
            result = JSON.parse(xhr.response)
            console.log(result.token)
            registerForm.style.visibility = "hidden";
            display.innerHTML = "<h3> Registration Token : " + result.token + "</h3>"
        }
        else {
            alert("Only defined users succeed registration!")
            console.log("Error Code is:" + xhr.status);
        }
    });

    xhr.addEventListener('error', function (event) {
        console.log('Error in HTTP request!' + xhr.status)
    });

    xhr.open("POST", 'https://reqres.in/api/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].value = ""
    }
}

var form = document.getElementById('sendForm')
var inputElements = document.querySelectorAll('.formEle')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var postObject = {
        email: inputElements[0].value,
        password: inputElements[1].value,
    }
    console.log(postObject)
    sendData(postObject)
});