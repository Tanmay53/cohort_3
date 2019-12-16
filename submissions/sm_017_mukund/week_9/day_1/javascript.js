





//Sends form data to the server as a JSON
function sendData(objData){
    var xhr = new XMLHttpRequest();
  
    var json = JSON.stringify(objData);
    
    xhr.addEventListener('load', function(){
      if(xhr.status <= 400){
        printResponse(xhr.response)
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    });
    
    xhr.addEventListener('error', function(event){
      console.log('Error in HTTP request!')
    });
  
    xhr.open("POST", "https://reqres.in/api/register")
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    
  }
  //Prints the response from the server!
  function printResponse(input){
    var body = document.querySelector('body')
    var outputPara = document.createElement('p')
    outputPara.textContent = input
    body.append(outputPara)
    var box = document.getElementById('box')
    box.style.visibility = 'hidden'
  }
  
  var submit = document.querySelector('#submit')
  
  submit.addEventListener('click', function(){
    var demail = document.getElementById('email').value
    var dpassword = document.getElementById('password').value
    var postObject = { email: demail, password: dpassword }
    sendData(postObject)
  });
  
  
