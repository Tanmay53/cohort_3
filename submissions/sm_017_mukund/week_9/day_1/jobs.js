function getUserData(displayFunction){
    var result = null;
    var xhr = new XMLHttpRequest();
    var url = "https://indreed.herokuapp.com/api/jobs?q=Web%20Developer"; 
    xhr.open('GET', url, true)
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        displayFunction(result);
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
  }
  
  var printUserData = function (input){
    var body = document.querySelector('body');
    var display = document.createElement('p');
    if(input == null){ 
      display.textContent = "Error! No user data received or invalid request!";
    }
    else{
      display.textContent = input;
    }
    body.append(display);
  }
  
  var displayBtn = document.querySelector('#submit')
  displayBtn.addEventListener('click',function(){
    getUserData(printUserData);
  });