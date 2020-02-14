var btn = document.querySelector("#subbtn")
        btn.addEventListener("click", checkData)
        var details
        function checkData() {
            var username = document.getElementById("user").value
            var pass = document.getElementById("pass").value
            console.log(username)
            console.log(pass)
            var obj = {
                "username": username,
                "password": pass
            }
            console.log(obj)
            details = JSON.stringify(obj)
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:8080/auth/login')
            xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
            console.log(details)
            xhr.send(details)
            xhr.onload = function () {
                if (xhr.status == 200) {
                    alert("success")
                    var result = JSON.parse(xhr.response)
                    var body = document.querySelector('body')
                    var div = document.createElement('div')
                    var h3=document.createElement("h3")
                    if(result.error == false) {
                        h3.textContent = result.token
                    }
                    
                    div.append(h3)
                    body.appendChild(div)
                }
                else if(xhr.status==401) {
                    alert("un successful")
                    var h3=document.createElement("h3")
                    h3.textContent = result.message
                    div.appendChild(h3)

                    // if(result.error == true) {
                    // }
                }
            }  
        }