var form= document.querySelector('#form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    var inputUserData=document.querySelectorAll('.formElem');
    var userDetailsObj={
        username: inputUserData[0].value, //got the username and password provided by user
        password: inputUserData[1].value,
    }
    sendUserData(getProfile,userDetailsObj); 
    //getProfile -->function which display user profile
    //getError --> function which display error mesg to user
    //userDetailsObj --> object containing user name and password
});

function sendUserData(displayProfile,loginUserObj){
    var xhr= new XMLHttpRequest();

    var userDataInJson=JSON.stringify(loginUserObj); //converting userObj to JSON

    xhr.addEventListener('load',function(){
        if (xhr.status==200){
            displayProfile(xhr.response,loginUserObj); //function to display user profile with regards to token number
            //we got as xhr.response
        }
        else{
            console.log(xhr.status,xhr.response);
            var body=document.getElementById('body'); //function which displays error message
            var displayMessage=document.createElement('p');
            displayMessage.textContent='The username or password was incorrect, please try again!'
            body.appendChild(displayMessage);        
        }
    })

    xhr.addEventListener('error',function(event){
        console.log('Error in http request!')
    });

    xhr.open('POST','http://localhost:8080/auth/login');
    xhr.setRequestHeader('Content-type','application/json;charset=utf-8');
    xhr.send(userDataInJson); //sending data to server
}

function getProfile(input,loginUser){
    
    var result=null;
    var responseCode=JSON.parse(input);
    var tokenWeGot=responseCode['token'];
    
    var xhr1=new XMLHttpRequest();

    xhr1.addEventListener('load',function(){
        if (xhr1.status == 200){
            result=xhr1.response;
            viewProfile(result);
        }
        else{
            console.log('Error is '+ xhr1.status)
        }
    })

    xhr1.addEventListener('error', function(event){
        console.log('Error in HTTP request!')
      });

    xhr1.open('GET','http://localhost:8080/user/'+loginUser['username']);
    xhr1.setRequestHeader('Authorization','Bearer'+' '+tokenWeGot);
    xhr1.send();
}

function viewProfile(res){
    var data=JSON.parse(res);
    var body=document.querySelector('body');
    body.innerHTML=''

    for (val in data){
        var table=document.createElement('table');
        var row=document.createElement('tr');
        var col1=document.createElement('td');
        var col2=document.createElement('td');
        col1.style.border='1px solid black';
        col1.style.padding='5px'
        col2.style.border='1px solid black';
        col2.style.padding='5px'
        col1.textContent=val;
        col2.textContent=data[val];
        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
        body.appendChild(table);
    }    
}
// .......................................................................................










