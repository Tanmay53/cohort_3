function sendData(objData){
    var xhr = new XMLHttpRequest();
  
    var json = JSON.stringify(objData);
    
    xhr.addEventListener('load', function(){
        if(xhr.status <= 400){
          var response = JSON.parse(xhr.response);
          var token = response.token;
          $("#hide").hide();
          $("#token").append("<h1>" + token + "</h1>");
        }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    });
    
    xhr.addEventListener('error', function(event){
      console.log('Error in HTTP request!')
    });
  
    xhr.open("POST", 'https://reqres.in/api/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(json);
    
  }
  var form = document.querySelector('#sendForm')
  form.addEventListener('submit', function(event){
    event.preventDefault(); 
    //Prevents the default behavior of the submit event!
    var mail= $("#email").val()
    var pass= $("#password").val()
    var postObject = {
      email : mail,
      password: pass
    }
    sendData(postObject)
  });
  
  