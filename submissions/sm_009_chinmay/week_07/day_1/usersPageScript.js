    // This configures the object to perform a GET request to the given url
    // For page=1
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=1');
    // This will send the GET request to the server.
    xhr.send()
    // This function will be called after the information is retrieved
    xhr.onload = function (){
    // The HTTP 200 code is returned when your request is successful so we check for that
        if(xhr.status == 200){
            var page = []; 
            page.push(JSON.parse(xhr.response))
            console.log(JSON.parse(xhr.response)) // Print the response from the server after a successful request
            var size = Object.values(Object.values((Object.values(JSON.parse(xhr.response)))[4])).length;
            console.log(size)

            displayData(JSON.parse(xhr.response))
        }
        else{
            console.log("Error Code is:" + xhr.status)
        }
    }

    $('#page-2-btn').click(function(){
      
        $('#tbody').empty();
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        // This will send the GET request to the server.
        xhr.send()
        // This function will be called after the information is retrieved
        xhr.onload = function (){
        // The HTTP 200 code is returned when your request is successful so we check for that
            if(xhr.status == 200){
                var page = []; 
                page.push(JSON.parse(xhr.response))
                console.log(JSON.parse(xhr.response)) // Print the response from the server after a successful request
                displayData(JSON.parse(xhr.response))
            }
            else{
                console.log("Error Code is:" + xhr.status)
            }
        }
    })

    $('#page-1-btn').click(function(){
      $('#tbody').empty();
      xhr.onload();
  })

    // Print Data   
    var displayData = (function(data){
        var size = Object.values(Object.values((Object.values(JSON.parse(xhr.response)))[4])).length;
        console.log(size)
        for(var i=0; i<size; i++){
            $('#tbody').append("<tr><th><img src="+'"'+ Object.values(Object.values((Object.values(data))[4])[i])[4]+'"'+">" + "</th>"+"<td>" + Object.values(Object.values((Object.values(data))[4])[i])[0] + "</td><td>" + Object.values(Object.values((Object.values(data))[4])[i])[2] +"</td><td>" +Object.values(Object.values((Object.values(data))[4])[i])[3]+ "</td><td>" +Object.values(Object.values((Object.values(data))[4])[i])[1]+ "</td></tr>")
        }
    })