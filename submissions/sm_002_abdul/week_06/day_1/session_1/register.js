var form=document.querySelector('#formData');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var inputData=document.querySelectorAll('.formElem');
    if (checkEmptyInput(inputData)){
        var body=document.querySelector('body');
        var display=document.createElement('p');
        display.textContent='Please Fill In All The Details';
        body.appendChild(display);
    }
    else{

        var inputDataObject={
            name:inputData[0].value,
            email:inputData[1].value,
            password:inputData[2].value,
            username:inputData[3].value,
            mobile:inputData[4].value,
            description:inputData[5].value,
        }
        sendData(inputDataObject);
    }
    
})

function checkEmptyInput(arr){
    for (var i=0;i<arr.length;i++){
        if (arr[i].value==''){
            return true;
        }
    }
    return false;
}

function sendData(objData){
    var xhr=new XMLHttpRequest();
    var userDataJson=JSON.stringify(objData);

    xhr.addEventListener('load',function(){
        if (xhr.status == 200){
            printResponse(xhr.response);            
        }
        else{
            printError(xhr.status);
            console.log('Error code is :'+ xhr.status);
        }
    })

    xhr.addEventListener('error',function(){
        console.log('error in HTTP request!')
    })

    xhr.open('POST','http://localhost:8080/auth/register');
    xhr.setRequestHeader('content-type','application/json; charset=utf-8');
    xhr.send(userDataJson);
}

function printResponse(input){
    var body=document.querySelector('body');
    var registrationDetails=document.createElement('p');
    registrationDetails.textContent=input;
    body.appendChild(registrationDetails);
}

function printError(input){
    var body=document.querySelector('body');
    var errorMessage=document.createElement('p');
    errorMessage.textContent='error '+input+ 'occured';
    body.appendChild(errorMessage);
}

