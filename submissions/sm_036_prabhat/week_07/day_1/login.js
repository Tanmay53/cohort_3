function sendPost(obj) {
    var xhr = new XMLHttpRequest();
    objData = JSON.stringify(obj);
    xhr.open("POST",'https://reqres.in/api/login')
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
    xhr.send(objData);
    xhr.addEventListener("load",function(){
        if(xhr.status <= 400){
            var datakey =xhr.response
            printResponse(datakey)
            auth(datakey)
        }
        else{
            console.log("Error Code is: "+ xhr.status)
        }
    });
    xhr.addEventListener('error',function(event){
        console.log("Error in HTTP request!")
    });
}

function printResponse (input){
     $("#output").html(input)
}

$("#submitBtn").click(function(){
    var email = $("#emailInp").val();
    var password = $("#pass").val();
    console.log(email,password)
    var obj = {     
        email : email,
        password : password
    }
    sendPost(obj)
})
