
function getData(){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    console.log("xhr",xhr)
    xhr.addEventListener('load', function ()
    {
      if(xhr.status == 200){
        result = xhr.response;
        console.log("result",result)
        printData(result);
        console.log(" printData(result)", printData(result))
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    }); 
    xhr.addEventListener('error', function() {
      alert("Request failed");
    });
    
    xhr.open("POST", "http://www.omdbapi.com/?i=tt3896198&apikey=c1dc3d4")
    xhr.send()
  }

  var printData = function (input){
    
    var data1 = document.getElementById("displayData")
    console.log("data1",data1)
    var display = document.createElement('div');
    console.log("display",display)
    if(input == null)
    { 
      display.textContent = "Error! No data received or invalid request!";
    }
    else
    {
      display.textContent = input;
    }
    data1.appendChild(display)
  }
  var displayBtn = document.getElementById("searchMovie")
  console.log("displayBtn",displayBtn)
  displayBtn.addEventListener('click',function(){
    getData(printData);
  });
