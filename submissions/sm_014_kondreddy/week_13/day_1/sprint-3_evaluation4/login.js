
        var btn=document.querySelector("#subbtn")
        btn.addEventListener('click',validateData)
        function validateData() {
            var email = document.getElementById("email").value
            var pass = document.getElementById("pass").value
            var obj = {
                "email": email,
                "password": pass

            }
            details = JSON.stringify(obj)
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://reqres.in/api/login')
            xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8')
            xhr.send(details)
            xhr.onload = function () {
                if (xhr.status == 200) {
                    alert("success")
                    
                    var result = JSON.parse(xhr.response)
                    var body = document.querySelector('body')
                    document.getElementById("main").style.display = "none";
                    var div = document.createElement('div')
                    div.textContent ="token is:"+result.token
                    body.appendChild(div)
                }
                else {
                    console.log(xhr.status)
                    alert("unsuccessful")
                }
            }  
        }