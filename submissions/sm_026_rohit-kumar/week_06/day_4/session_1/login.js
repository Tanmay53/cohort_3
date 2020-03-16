function requestLogin(displayLoginStatus, obj) {
    xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('content-type', 'application/json;charset=utf-8')

    json = JSON.stringify(obj)
    xhr.send(json)


    xhr.onload = function() {
        if(xhr.status == 200) {
            displayLoginStatus(xhr.response)
        }
    }

    xhr.onerror = function() {
        //alert('Error : ' + xhr.status)
        alert('The username or password was incorrect, please try again!')
    }
}

function printUserData(response) {
    res = JSON.parse(response)
    //alert('valie ' + res['email'])
    document.getElementById('name').textContent = res['name']
    document.getElementById('email').textContent = res['email']
    document.getElementById('username').textContent = res['username']
    document.getElementById('mobile').textContent = res['mobile']
    document.getElementById('description').textContent = res['description']

}

function loadUserData(token) {
    // new request to load users data
    username = document.getElementById('inputUsername').value
    xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8080/user/' + username)
    xhr.setRequestHeader('Authorization',  'Bearer ' + token)
    xhr.send()

    xhr.onload = function() {
        if(xhr.status == 200) {
            printUserData(xhr.response)        
        }
        
    }

    xhr.onerror = function() {
        alert('Some error occured while fetching user profile !')
    }
}

function displayLoginStatus(response) {
    var res = JSON.parse(response)
    if(res["error"] == true) {
        alert(res["message"])
    }
    else {
        var token = res["token"]
        loadUserData(token, printUserData)
    }
}

function login() {
    username = document.getElementById('inputUsername').value
    password = document.getElementById('inputPassword').value

    if(username == "" || password == "") {
        alert('Please fill all fields correctly !')
        return
    }

    var obj = {
                "password": password,
                "username": username
      }
    
    requestLogin(displayLoginStatus, obj)
}