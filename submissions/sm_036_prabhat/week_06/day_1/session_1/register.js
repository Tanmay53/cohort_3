function sendPost(obj) {
    var xhr = new XMLHttpRequest();
    objData = JSON.stringify(obj);
    xhr.open("POST",'http://localhost:8080/auth/register')
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
    xhr.send(objData);
    xhr.addEventListener("load",function(){
        if(xhr.status <= 400){
            printResponse(xhr.response)
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
        name : inp[0].value,
        email : inp[1].value,
        password : inp[2].value,
        username : inp[3].value,
        mobile : inp[4].value,
        description : inp[5].value,
    }
    sendPost(obj)
}
