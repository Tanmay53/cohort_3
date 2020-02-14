 
 
 var obj = {
    name: "MASAI School",
    email: "hello@masai.com",
    password: "secret",
    username: "masai-school",
    mobile: "9876543210",
    description: "A Transformation in education!" 
  }

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/auth/register');
xhr.setRequestHeader('Content-type', 'application/json');

xhr.send()
xhr.onload = function(){
    if(xhr.status < 400){
        console.log(xhr.response)
    }
    else{
        console.log( xhr.status)
        console.log(xhr.response)
    }
}
