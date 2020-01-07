
$(document).ready(function(){
    // your code goes here
    function User(email, password) {
        this.email = email,
            this.password = password
    }
    
    
    $("#submit").click(function () {
        console.log("after clicking submit this shud show")
        var id = $("#email").val()
        console.log($("#email").val())
    
        var pwd = $("#password").val()
        console.log($("#password").val())
    
        var data = new User(id,pwd)
        
        var json = JSON.stringify(data)
        console.log(json)
    
    
        var xhr = new XMLHttpRequest()
    
        xhr.open("POST","https://reqres.in/api/login")
    
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    
        xhr.send(json)
    
        xhr.addEventListener("error", function () {
            console.log("Error")
        })
        xhr.addEventListener("load", function () {
            if (xhr.status == 200) {
                console.log(xhr.response)
                var result = xhr.response
                displayResponse(result)
            }
            else {
                console.log("Error status is : " + xhr.status)
            }
        })
    
    })
    function displayResponse(output) {
        var result = JSON.parse(output)
        console.log(result.token)
    
        $(".hideWhenDisplay").hide()
        $(".tokenGot").html("Token :" + result.token)
    }

  });
