var os = document.getElementById("select").value;
var btnDisplay = document.getElementById("btnDisplay")
btnDisplay.addEventListener('click', getUserData);

function getUserData(){
    var result = null;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/codenames/'+os);
    xhr.send()
    xhr.onload = function (){
        if(xhr.status == 200)
        {
           result = JSON.parse(xhr.response);
           //console.log(JSON.parse(result));
           displayFunction(result);
        }
        else{
            console.log('Error code is:'+ xhr.status);
        }
    }
}

function displayFunction(input)
{
    var tBody = document.getElementById("tBody")
    tBody.innerHTML = ""
    input.codenames.forEach(function (ele){
        //empty previous values
       

        
        var tr1 = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = ele.name
        var td2 = document.createElement("td");
        td2.innerHTML = ele.version;

        //append the children
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tBody.appendChild(tr1);

    })
}
//var btnDisplay1 = document.getElementById("btnDisplay1");
//btnDisplay1.addEventListener('click', displayFunction);
