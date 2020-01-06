



function getUserData(displayFunction,val){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var url = 'http://localhost:8080/codenames/'+val
             
    xhr.open('GET', url); 
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

  var printUserData= function(input){
    var row = document.querySelector("#row")
    var col = document.createElement("td")
    if(input == null)
    {
      col.textContent="Error no data received"
    }
    else
    {
      col.textContent = input
    }
    row.appendChild(col)

  }

  var display = document.querySelector("#submit")
  display.addEventListener("click",function(){
    var val = document.getElementById("sel").value
    // alert(val)
    getUserData(printUserData,val);
  })