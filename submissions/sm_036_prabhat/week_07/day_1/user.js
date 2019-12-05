$(document).ready(function(){
    var xhr = new XMLHttpRequest();
    var page = $(".pagination").val()
    console.log(page)
    var url = 'https://reqres.in/api/users?page=2'
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            // console.log(xhr.response)
            var output = xhr.response;
            var userData = JSON.parse(output)
            // console.log(userData)
            searchResultPrint(userData)
        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }
    // $("#output").empty();
    
  });

function searchResultPrint(userData) {
    console.log(userData)

    var  apiDiv = document.createElement('div');
    apiDiv.setAttribute('class',"col-6");
    apiDiv.innerHTML ="Showing Search Result for " ;
    $("#output").append(apiDiv);

    for(var i = 0; i < userData["data"].length; i++){
        
        var cardAddCol = document.createElement('div');
        var cardAdd = document.createElement('div');
        var image = document.createElement('img');
        var cardDiv = document.createElement('div');
        var cardH5 = document.createElement('h5');
        var subdiv1 = document.createElement('div');
        var subdiv2 = document.createElement('div');
        var subdiv3 = document.createElement('div');
     
        
        cardAddCol.setAttribute('class',"col-4");
        
        cardAdd.setAttribute('class','card');
        cardAdd.setAttribute('class',"mt-5");
        image.setAttribute("src", userData["data"][i]["avatar"]);
        image.setAttribute("class",'card-img-top');
        
        cardDiv.setAttribute('class',"card-body");
        cardDiv.setAttribute('class',"text-center");
        
        cardH5.setAttribute('class',"card-title");
        cardH5.innerHTML= "User Id -"+userData["data"][i]["id"];
        subdiv1.setAttribute('class',"card-text-center");
        subdiv1.innerHTML = "First Name -" + userData["data"][i]["first_name"];
        subdiv2.setAttribute('class',"card-text-center");
        subdiv2.innerHTML = "Last Name -" + userData["data"][i]["last_name"];
        subdiv3.setAttribute('class',"card-text-center");
        subdiv3.innerHTML = "Email -" + userData["data"][i]["email"];
        
        cardAdd.appendChild(image);
        cardAdd.appendChild(cardDiv);
        cardDiv.appendChild(cardH5);
        cardDiv.appendChild(subdiv1);
        cardDiv.appendChild(subdiv2);
        cardDiv.appendChild(subdiv3);
        cardAddCol.appendChild(cardAdd);
        $("#output").append(cardAddCol);
    }
}