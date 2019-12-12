function register() {
    var input = document.getElementsByClassName('inputs')

    for (j = 0; j < input.length; j++) {
        if (input[j].value == '') {
            alert('Please Fill All The Entries')
            return
        }

    }
    var obj = {
        name: input[0].value,
        email: input[1].value,
        password: input[2].value,
        username: input[3].value,
        mobile: input[4].value,
        description: input[5].value
    }
    console.log(obj)

    var xhr = new XMLHttpRequest();
    var data = JSON.stringify(obj)
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            printResponse(xhr.response)
            console.log(xhr.response)
        }
        else {
            console.log("Error Code is:" + xhr.status);
        }
    })

    xhr.addEventListener('error', function (event) {
        console.log('Error in HTTP request!')
    });

    xhr.open("POST", 'http:/localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data);

    
}
function printResponse(input) {
    var body = document.getElementById('display')
    var para = document.createElement('p')
    para.textContent = input
    body.appendChild(para)
}
