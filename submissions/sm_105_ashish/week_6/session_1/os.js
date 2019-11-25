function getUserData(displayFunction){
    var val=document.querySelector('.myselect').value
    var result = null;
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'http://localhost:8080/codenames/'+val);
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = xhr.response;
        console.log(JSON.parse(result))
        displayFunction(result);
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
  }
  
  // This function will check the input to see if it is null and print the input to a p tag if it is not null.
  var printUserData = function (input){
    var body = document.querySelector('.dpage');
    var display = document.createElement('div');
    displayBtn.setAttribute('class',"col-5 m-3")
    if(input == null){ // checking if the input is null
      display.textContent = "Error! No user data received or invalid request!";
      //It will print an error if the input is null
    }
    else{
      display.textContent = input;
      //Otherwise it will display the text
    }
    body.append(display);
  }
  
  //Button and listener for the `click here to print the user data!` button
  var displayBtn = document.querySelector('#printUsers')
  displayBtn.addEventListener('click',function(){
    getUserData(printUserData);
  });
 
 