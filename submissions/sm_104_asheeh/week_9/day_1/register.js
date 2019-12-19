$(document).ready(function(){

});

function sendData(objData)
{
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify(objData);
    xhr.addEventListener("load", function(){
        if(xhr.status <= 400)
        {
            printResponse(xhr.response)

        }
        else
        {
            console.log("Error code is:" + xhr.status)
        }
    });
    xhr.addEventListener("error", function(event){
        console.log("Error in HTTP request:")
    });

    xhr.open("POST", "https://reqres.in/api/register")
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(json);
}

function printResponse(input)
{
    var body = document.querySelector("body");
    var outputPara = document.createElement("p");
    outputPara.textContent = input;
    body.appendChild(outputPara);
}

var form = document.querySelector("#sendForm");
form.addEventListener("submit", function(event){
    event.preventDefault();


var inputElements = document.querySelectorAll(".formEle")
var postObject = {
email : inputElements[0].value,
password : inputElements[1].value
}
sendData(postObject)
});