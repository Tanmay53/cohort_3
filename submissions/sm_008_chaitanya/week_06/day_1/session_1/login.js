var button = document.getElementById("sub_mit")
button.addEventListener('click', function () {
    getUserData(display)
})
var details

function getUserData(profile) {
    var user_name = document.getElementById("u_name").value
    var pass_word = document.getElementById("u_pass").value

    var details = {
        password: pass_word,     //key is same as the key in the authentication details object in api
        username: user_name,
    }

    details = JSON.stringify(details)

    var xhr = new XMLHttpRequest();
    var result = null;

    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(details)
    xhr.onload = function () {
        if (xhr.status == 200) {
            result = JSON.parse(xhr.response)
            profile(result)
        }
        else {
            console.log('The username or password was Incorrect, please try again!')
        }
    }

    xhr.onerror = function () {
        console.log('Error in HTTP request !')
    }
}

function display(result) {
    var token = result.token
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/user/chaitu')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            var profileData = JSON.parse(xhr.response)
            printData(profileData)
        }
        else {
            console.log("Error code is:" + xhr.status)
        }
    }
}

function printData(items) {
    var output = document.getElementById('out')
    var tab = document.createElement('table')
    output.innerHTML = ""
    for (key in items) {
        var row = document.createElement('tr')
        var col_1 = document.createElement('td')
        col_1.textContent = key
        console.log('col_1' + col_1)
        var col_2 = document.createElement('td')
        col_2.textContent = items[key]
        console.log("col_2" + col_2)
        row.append(col_1)
        row.append(col_2)
        tab.append(row)
    }
    output.append(tab)
    tab.setAttribute('class', 'col-8 col-md-8 col-lg-3 text-center container bg-info table h5 my-5')
}





