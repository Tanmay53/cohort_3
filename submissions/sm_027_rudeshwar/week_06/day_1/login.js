// This function will get JSON data from the server and call the printUserData function!
//The argument displayFunction is a function!
//The argument user_id is a string from the input with id = "user"
function getUserData(js) {
    var result = null;
    var xhr = new XMLHttpRequest();
    var url = ' http://localhost:8080/auth/login' + js
    xhr.open('POST', url); //Here I have simply appended user_id to the string
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            result = xhr.response;
            console.log(result);
        }
        else {
            console.log("Error Code is:" + xhr.status);
        }
    }
}


var displayBtn = document.querySelector('#printUser')
displayBtn.addEventListener('click', function () {
    var username = document.querySelector('#user').value
    var password = document.querySelector('#password').value

    var obj = {
        username : username,
        password : password
    }

    var js = JSON.parse(obj)
    getUserData(js)
})