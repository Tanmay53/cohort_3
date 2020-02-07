var btn = document.querySelector("#btn")
btn.addEventListener("click", checkData)
var details
function checkData() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    var user = document.getElementById("username").value
    var mobilenumber = document.getElementById("mnumber").value
    var description = document.getElementById("desc").value
    var obj = {
        "name": name,
        "email": email,
        "password": pass,
        "username": user,
        "mobile": mobilenumber,
        "description": description

    }
    details = JSON.stringify(obj)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8')
    xhr.send(details)
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert("success")
            var result = JSON.parse(xhr.response)
            var body = document.querySelector('body')
            var div = document.createElement('div')
            div.textContent = result.token+" "+result.id
            body.appendChild(div)

        }
        else {
            console.log(xhr.status)
            alert("unsuccessful")
        }

    }


}


// var inputData=document.querySelectorAll('.formElem');
//     if (checkEmptyInput(inputData)){
//         var body=document.querySelector('body');
//         var display=document.createElement('p');
//         display.textContent='Please Fill In All The Details';
//         body.appendChild(display);
//     }
//     else{

//         var inputDataObject={
//             name:inputData[0].value,
//             email:inputData[1].value,
//             password:inputData[2].value,
//             username:inputData[3].value,
//             mobile:inputData[4].value,
//             description:inputData[5].value,
//         }
//         sendData(inputDataObject);
//     }

// function checkEmptyInput(arr){
//     for (var i=0;i<arr.length;i++){
//         if (arr[i].value==''){
//             return true;
//         }
//     }
//     return false;
// }

// function sendData(objData){
//     var xhr=new XMLHttpRequest();
//     var userDataJson=JSON.stringify(objData);

//     xhr.addEventListener('load',function(){
//         if (xhr.status == 200){
//             printResponse(xhr.response);            
//         }
//         else{
//             printError(xhr.status);
//             console.log('Error code is :'+ xhr.status);
//         }
//     })

//     xhr.addEventListener('error',function(){
//         console.log('error in HTTP request!')
//     })

//     xhr.open('POST','http://localhost:8080/auth/register');
//     xhr.setRequestHeader('content-type','application/json; charset=utf-8');
//     xhr.send(userDataJson);
// }sub

// function printResponse(input){
//     var body=document.querySelector('body');
//     var registrationDetails=document.createElement('p');
//     registrationDetails.textContent=input;
//     body.appendChild(registrationDetails);
// }

// function printError(input){
//     var body=document.querySelector('body');
//     var errorMessage=document.createElement('p');
//     errorMessage.textContent='error '+input+ 'occured';
//     body.appendChild(errorMessage);
// }

