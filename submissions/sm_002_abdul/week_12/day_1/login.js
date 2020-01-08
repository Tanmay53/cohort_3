var form=document.querySelector('#form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    
    var userDetails={
        email: email, //got the username and password provided by user
        password: password,
    }
    sendUserData(printToken,userDetails);
});


function sendUserData(tokenPrint,obj){
    var xhr= new XMLHttpRequest();

    var userDataInJson=JSON.stringify(obj); //converting userObj to JSON

    xhr.addEventListener('load',function(){
        if (xhr.status==200){
            tokenPrint(xhr.response); //function to display token
        }
        else{
            var response=xhr.response;
            console.log(response)
            var body=document.getElementById('body'); //displays error message
            var displayMessage=document.createElement('p');
            displayMessage.textContent=response;
            body.appendChild(displayMessage);        
        }
    })

    xhr.addEventListener('error',function(event){
        console.log('Error in http request!')
    });

    xhr.open('POST','https://reqres.in/api/login');
    xhr.setRequestHeader('Content-type','application/json;charset=utf-8');
    xhr.send(userDataInJson); //sending data to server
}

function printToken(token){
    var body=document.querySelector('body');
    body.innerHTML='';
    var tokenDisplay=document.createElement('h1');
    tokenDisplay.textContent= token;
    body.appendChild(tokenDisplay);
    tokenDisplay.style.color='teal'
}

