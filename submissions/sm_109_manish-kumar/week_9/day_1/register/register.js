
function posting(contentData){
  var xhr = new XMLHttpRequest();

  var json = JSON.stringify(contentData);
  
  xhr.addEventListener('load', function(){
    if(xhr.status == 200){
      printResponse(xhr.response)
    }
    else{
      console.log("error:" + xhr.status);
    }
  });

  xhr.open("POST", 'https://reqres.in/api/login')
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);
  
}

function printResponse(input){
  var body = document.querySelector('body')
  var token = document.createElement('div')
  token.textContent = input
  body.append(token)
  console.log(input)
}

var form = document.querySelector('#upload')

form.addEventListener('submit', function(event){
  event.preventDefault(); 
  var inputs = document.querySelectorAll('.element')
  var postObject = {
    email : inputs[0].value,
    password: inputs[1].value
  }
  posting(postObject)
});

