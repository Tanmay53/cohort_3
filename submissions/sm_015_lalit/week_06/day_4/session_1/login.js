
function printData (q){
    mainDiv.style.display = "none"
    var para=document.createElement("p")
    para.textContent=q
    para.setAttribute("class","mt-3 text-center")
    para.style.whiteSpace='pre-line'
    showInfo.appendChild(para)
}

function printObj(k){
    userData=""
    for (key in k){
        if (key=="displayDetails"){
            continue
        }
        else{
            keyData=key+":"+k[key]
        }
        
        userData=userData+keyData+"\n"
        
    }
    console.log(userData)
    printData(userData)
    
}

function returnInfo(x,y){
    var request=$.ajax({
        url:"http://localhost:8080/user/"+x ,
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', 'Bearer '+y)
        }
    });
    request.done(function(data){
        console.log(data)
        rMsg=JSON.parse(data)
        printObj(rMsg)
    })
}


  function checkUser(){
    inputUsername=document.getElementById("iUserN").value
    inputPassword=document.getElementById("iPass").value
    
    obj={
        password: inputPassword,
        username: inputUsername
      }
      json=JSON.stringify(obj)

      var request=$.ajax({
          method: "POST",
          url: "http://localhost:8080/auth/login",
          data: json,
          beforeSend: function(xhr){
              xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
            }

      });
            request.done(function(data){
                console.log(data)
                msg=JSON.parse(data)
                token=msg["token"]
                returnInfo(inputUsername,token)
            })
            request.fail(function(){
                if(request.status==401){
                    alert("The username or password was incorrect, please try again!")
                }
                
            })
     

  }

  iLogin.addEventListener("click",checkUser)