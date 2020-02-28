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
                        // h3.textContent = result.token
                        window.location.href = "/home/masai/coding/projects/flipkart/index.html";
                    }
                    
                    div.append(h3)
                    body.appendChild(div)
                }
                else {
                    alert("un successful")
                    var result = JSON.parse(xhr.response)
                    var h3=document.createElement("h3")
                    h3.textContent = result.message
                    div.appendChild(h3)
                }
            }  
        }