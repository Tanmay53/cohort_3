function callApi() {
    var xhr = new XMLHttpRequest(); 
  
    // This configures the object to perform a GET request to the given url
    // Notice how we pass page=2
    xhr.open('GET', 'http://localhost:8080/codenames/android');
    // This will send the GET request to the server.
    xhr.send()
    // This function will be called after the information is retrieved
    xhr.onload = function (){
      // The HTTP 200 code is returned when your request is successful so we check for that
      if(xhr.status == 200){
          console.log(xhr.response) // Print the response from the server after a successful request
      }
      else{
          console.log("Error Code is:" + xhr.status)
      }
    }
  }