var inp1;
var inp2;
 
 var obj = {
    name: "MASAI School",
    email: "hello@masai.com",
    password: "secret",
    username: "masai-school",
    mobile: "9876543210",
    description: "A Transformation in education!" 
  }

  function submit(){
     inp1 = document.getElementById("#username").value
     inp2 = document.getElementById("#password").value
    
}

 var xhr = new XMLHttpRequest();
 var url = "http://localhost:8080"

var params={
    "name" :inp1,
    "surname":inp2
}
xhr.open('POST', url+'/auth/register' );
xhr.setRequestHeader('Content-type', 'application/json');
xhr.onload = function () {
    if(xhr.status == 200) {
        console.log(xhr.response)
        console.log(xhr.status)
        alert("hi")
    }else{
        console.log(xhr.status)
    }
}
xhr.send(params)




// xhr.onload = function(){
//     if(xhr.status < 400){
//         console.log(xhr.response)
//     }
//     else{
//         console.log( xhr.status)
//         console.log(xhr.response)
//     }
// }
