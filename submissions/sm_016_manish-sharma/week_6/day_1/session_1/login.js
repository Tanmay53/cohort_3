function login() {
    var input = document.getElementsByClassName('inputs')
    var obj = {
        password: input[1].value,
        username: input[0].value
    }
    console.log(obj)
    var xhr = new XMLHttpRequest();
    var data = JSON.stringify(obj)
    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.response)
            console.log(response)
            var tokenValue = response.token
            console.log(tokenValue)
            var xhr2 = new XMLHttpRequest()
            xhr2.open('GET', 'http:/localhost:8080/user/' + input[0].value)
            xhr2.setRequestHeader('Authorization', 'Bearer ' + tokenValue);
            xhr2.send()
            xhr2.onload = function () {
                if (xhr2.status == 200) {
                    var displayData = JSON.parse(xhr2.response)
                    console.log(displayData)
                    var cont = document.getElementById('cont')
                    cont.remove()
                    var body = document.querySelector('body')
                    var div = document.createElement('div')
                    div.setAttribute('class', 'container m-5 bg-warning')
                    body.appendChild(div)
                    var para = document.createElement('p')
                    para.style.whiteSpace='pre-line'
                    str=''
                    for(key in displayData){
                        if(key=='token'){
                            continue
                        }
                        else{
                            str=str+key+':'+displayData[key]+'\n'
                        }
                    }
                    para.textContent = str
                    div.appendChild(para)
                }
                else if (xhr.response == 401) {
                    console.log("Error Code is:" + xhr.status);
                }
            }
        }
        else if (xhr.response == 401) {
            alert('The username or password was incorrect, please try again!')
        }
    })
    xhr.addEventListener('error', function (event) {
        console.log('Error in HTTP request!')
        alert('Error in HTTP request!')
    });
    xhr.open('POST', 'http:/localhost:8080/auth/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data)


}