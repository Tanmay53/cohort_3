//Sends form data to the server as a JSON
function sendData(objData){
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify(objData);
    
    xhr.addEventListener('load', function(){
        if(xhr.status <= 400){
        var text = JSON.parse(xhr.response)
        printResponse(Object.values(text))
        }
        else{
        console.log("Error Code is:" + xhr.status);
        }
    });
    
    xhr.addEventListener('error', function(event){
        console.log('Error in HTTP request!')
    });

    xhr.open("POST", 'https://reqres.in/api/login')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
}

//Prints the response from the server!
function printResponse(input){
$('#sendForm').remove();
var body = document.querySelector('body')
var outputPara = document.createElement('p')
outputPara.textContent = "Token generated is: "+input
body.append(outputPara)
}

var form = document.querySelector('#sendForm')

form.addEventListener('submit', function(event){
event.preventDefault(); //Prevents the default behavior of the submit event!
var postObject = {
    email : $('#inputEmail').val(),
    password: $('#inputPassword').val()
}
sendData(postObject)
});