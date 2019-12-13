



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
 var xhr= new XMLHttpRequest();
 xhr.addEventListener("load",function(){
     if(xhr.status==200){
         console.log(xhr.response)
         rMsg=JSON.parse(xhr.response)
         printObj(rMsg)
     }
     else{
         console.log(xhr.status)
     }
 })
 xhr.open("GET","http://localhost:8080/user/"+x)
 xhr.setRequestHeader('Authorization', 'Bearer '+y)
 xhr.send()
}

  function checkUser(){
    inputUsername=document.getElementById("iUserN").value
    inputPassword=document.getElementById("iPass").value
    
    obj={
        password: inputPassword,
        username: inputUsername
      }
      var xhr=new XMLHttpRequest();
      var json=JSON.stringify(obj)
      xhr.open("POST","http://localhost:8080/auth/login")
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
      xhr.send(json)
      xhr.addEventListener("load",function(){
          if(xhr.status==200){
              console.log(xhr.response)
              msg=JSON.parse(xhr.response)
              token=msg["token"]
            //   alert(token)
              returnInfo(inputUsername,token)
          }
          else {
              console.log("The username or password was incorrect, please try again!")
              alert(xhr.status)
          }
      })
     

  }

  iLogin.addEventListener("click",checkUser)