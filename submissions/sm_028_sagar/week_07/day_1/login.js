$('#submit').click(function() {
    console.log('click')
    var email = $('.email').val();
    var password = $('#exampleInputPassword1').val();
    console.log(email, password)
    var obj = {
        email: email,
        password: password
    }
    loginData(obj)
})


//function to register data
function loginData(object) {
    console.log('entry check')
    json = JSON.stringify(object);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    xhr.addEventListener('load', function() {
        if (xhr.status == 200) {
            console.log(xhr.response)
            printResponse(xhr.response)
        } else {
            console.log("Error Code is:" + xhr.status);
        }
    });

    xhr.addEventListener('error', function(event) {
        alert('Error in HTTP request!');
        console.log('Error in HTTP request!');
    });
}

function printResponse(data) {
    data = JSON.parse(data);
    console.log(data)

    //removing login page elements
    var ele = document.querySelectorAll('.formEle');
    for (var i = 0; i < ele.length; i++) {
        ele[i].remove();
    }

    var token = document.getElementById('token');
    var div = document.createElement('div');
    div.setAttribute('class', 'container');
    var h2 = document.createElement('h2');
    h2.setAttribute('class', 'text-align-center')
    h2.textContent = 'tokenId :' + data.token;
    div.append(h2);
    token.appendChild(div)
}