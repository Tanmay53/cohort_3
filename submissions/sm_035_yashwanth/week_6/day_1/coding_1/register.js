function sub(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var username = document.getElementById('username').value
    var password= document.getElementById('password').value
    var mobile = document.getElementById('mobile').value
    var description= document.getElementById('description').value
    var details = {
        name: name,
        email:email,
        username:username,
        password:password,
        mobile:mobile,
        description:description
    }
    var xhr = new XMLHttpRequest;
    xhr.open('POST',"http://localhost:8080/auth/register")
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(JSON.stringify(details))
    xhr.onload = function (){
   if(xhr.status == 200){
       console.log(xhr.response)
       var result = xhr.response
       console.log(result)
   }
   else{
       console.log("Error code is :" + xhr.status)
   }
    }
}