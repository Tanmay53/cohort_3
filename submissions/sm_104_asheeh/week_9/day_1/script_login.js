// $(document).ready(function(){
    
// });

// function to send form data to the server as JSON//
function sendData(objData)
{
    var xhr =new XMLHttpRequest();
    var json = JSON.stringify(objData);

    xhr.addEventListener('load', function(){
        if(xhr.status <= 400)
        {
            printResponse(xhr.response);
        }
        else
        {
            console.log("Error code is:" + xhr.status); 
        }
    });

    xhr.addEventListener('error', function(event){
        console.log("Error in HTTP rquest!");
    });

    xhr.open("POST", "https://reqres.in/api/login");
    xhr.setRequestHeader("content-type",'application/json; charset=utf-8');
    xhr.send(json);
}

//print token from the server//
function printResponse(input){
    var body = document.querySelector("body");
    var outputPara = document.createElement("p");
    outputPara.textContent = input;
    body.append(outputPara)
}
var form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    var inputElements = document.querySelectorAll(".formElement")
    var postObject = {
        email : inputElements[0].value,
        token : inputElements[1].value
    }
    sendData(postObject);
});
