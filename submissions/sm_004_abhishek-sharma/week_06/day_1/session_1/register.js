//Sends form data to the server as a JSON
function sendData(objData){
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify(objData); 

    xhr.addEventListener('load', function(){
      if(xhr.status < 400){
        console.log(xhr.response)
        // success()
      }
      // else if(xhr.status == 401){
      //   console.log("Error Code is:" + xhr.status);
      // }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    });
    
    xhr.addEventListener('error', function(event){
      console.log('Error in HTTP request!' + xhr.status)
    });
  
    xhr.open("POST", 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    for(var i = 0; i < inputElements.length; i++){
        inputElements[i].value = ""
    }
  }

var form = document.getElementById('sendForm')
var inputElements = document.querySelectorAll('.formEle')

form.addEventListener('submit', function(event){
    event.preventDefault(); 
    var postObject = {
        name: inputElements[0].value,
        email: inputElements[1].value,
        password: inputElements[2].value,
        username: inputElements[3].value,
        mobile: inputElements[4].value,
        description: inputElements[5].value
    }
    console.log(postObject)
    sendData(postObject)
  });