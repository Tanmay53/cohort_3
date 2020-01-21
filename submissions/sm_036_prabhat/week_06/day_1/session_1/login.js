function sendPost(obj) {
    var xhr = new XMLHttpRequest();
    objData = JSON.stringify(obj);
    xhr.open("POST",'http://localhost:8080/auth/login')
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
    xhr.send(objData);
    xhr.addEventListener("load",function(){
        if(xhr.status <= 400){
            var token = JSON.parse(xhr.response)["token"]
            auth(obj["username"], token);
        }
        else{
            console.log("Error Code is: "+ xhr.status)
        }
    });
    xhr.addEventListener('error',function(event){
        console.log("Error in HTTP request!")
    });
}

function auth(username,token) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",'http://localhost:8080/user/'+username);
    xhr.setRequestHeader("Authorization","Bearer "+token);
    xhr.send();
    xhr.addEventListener("load",function(){
        if(xhr.status <= 400){
            printResponse(xhr.response);
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
    var divOutput = document.getElementById("output");
    divOutput.innerHTML = input;
}

function submit(){
    var inp = document.querySelectorAll('input')
    console.log(inp);
    var obj = {
        username : inp[0].value,
        password : inp[1].value,
    }
    sendPost(obj)
}
