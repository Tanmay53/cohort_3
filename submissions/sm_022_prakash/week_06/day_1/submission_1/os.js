var user_input = null

function submit(){
    console.log("Working")
    var val = document.querySelector("#operatingSystem").value;
    console.log(val)
     user_input = val;
}
console.log(user_input)

// function callAPI(submit){
// var xhr = new XMLHttpRequest();
// xhr.open = ('GET', 'http://localhost:8080/'+submit);
// xhr.onload = function(){
//     if(xhr.status == 200){
//         console.log(xhr.response)
//     }
//     else{
//         console.log("Error COde is: " + xhr.status)
//     }
// }

// }  
function getUserdata(displayFunction,user_input){
    var result = null;
    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/codenames/'+user_input
    console.log(url)
    xhr.open('GET',url);
    xhr.send()
    xhr.onload = function(){
        if(xhr.status == 200){
            result = xhr.response;
            displayFunction(result);
        }
        else{
            console.log("error code is:" + xhr.status);
        }
    }
}

var printUserData = function (input){
    // var tbl = document.querySelector('#resultAppend'); 
    // var tblr = document.createElement('tr');
    // var tbld = document.createElement('td');
    var body = document.querySelector('body');
    var display = document.createElement('p');
    if(input == null){
        display.textContent = 'Error! No user data received or invalid request!'
    }
    else{
        display.textContent = input;
    }
    body.append(display)

}
var displayBtn = document.querySelector('#input_value')
    displayBtn.addEventListener('click',function(){
    var input = document.getElementById("operatingSystem").value;
        getUserdata(printUserData, input)
    })