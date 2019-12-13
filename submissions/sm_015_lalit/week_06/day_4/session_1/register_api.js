

function getData() {
var inputName = document.getElementById("iName").value
var inputEmail = document.getElementById("iEmail").value
var inputPassword = document.getElementById("iPass").value
var inputUsername = document.getElementById("iUserN").value
var inputMobile = document.getElementById("iMobile").value
var inputDescription = document.getElementById("iDescription").value


var obj = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
    username: inputUsername,
    mobile: inputMobile,
    description: inputDescription,
}
    var objString=JSON.stringify(obj)

    var request=$.ajax({
       method: "POST",
       url:  "http://localhost:8080/auth/register",
       data: objString,
       beforeSend : function(xhr){
           xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
       }
    });

     request.done(function(data){
         console.log(data)
         var msg= JSON.parse(data)
         alert(msg['message'])
     })
     request.fail(function(){
         console.log(request.status)
         alert("Request failed")
     })

    }

iSignUp.addEventListener("click", function () {
    var flagx = "true"
    var all = document.querySelectorAll(".inputT")
    console.log(all)
    for (i = 0; i < all.length; i++) {
        if (all[i].value == "") {
            alert("Kindly fill all details properly")
            flagx = "false"
        }
    }
    if (flagx == "true") {
        getData()
    }
    console.log(flagx)
})

formP.addEventListener("submit", function (event) {
    event.preventDefault();
})