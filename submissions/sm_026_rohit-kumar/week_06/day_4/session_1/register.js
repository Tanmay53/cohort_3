function displayResult(response) {
    res = JSON.parse(response)
    alert(res['message'])
}

function makeRequest(displayResult, obj) {
    xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('content-type', 'application/json;charset=utf-8')
    json = JSON.stringify(obj)
    xhr.send(json)

    //alert('works till ehre')
    // set event handler
    xhr.onload = function() {
        if(xhr.status == 200) {
            displayResult(xhr.response)
        }
        else if(xhr.status == 401) {
            alert('You are unauthorize to perform this action !')
        }
        else {
            alert('An error occured !')
        }
    }

    xhr.onerror = function() {
        alert('An error has occured while performing operation, Error code : ', xhr.response)
    }
}

function onSubmit() {
    name = document.getElementById('inputName').value
    email = document.getElementById('inputEmail').value
    pass  = document.getElementById('inputPassword').value
    username = document.getElementById('inputUsername').value
    mobile   = document.getElementById('inputMobile').value
    des      = document.getElementById('inputDescription').value

    if(name == "" || email == "" || pass == "" || username == "" || mobile == "" || des == "") {
        alert('Please fill all fields carefully !!') 
        return
    }

    var obj = {
                "name": name,
                "email": email,
                "password": pass,
                "username": username,
                "mobile": mobile,
                "description": des
      }

      makeRequest(displayResult, obj)
    
}