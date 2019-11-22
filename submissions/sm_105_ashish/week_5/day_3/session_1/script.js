localStorage.setItem('userName','Ashish')
localStorage.setItem('Password','12345')

var sub=document.getElementById('sub')
function addData(){
event.preventDefault()
var user=document.getElementById('user').value
var key=document.getElementById('key').value
var userN=localStorage.getItem('userName')
var passKey=localStorage.getItem('Password')


if(user==userN && key==passKey){
        var newlocation="http://127.0.0.1:5500/dash.html";
              location=newlocation;
              localStorage.setItem('logintime',Date())
              localStorage.setItem("timeinms",Date.now())
             }    
}
sub.addEventListener('click',addData)


 



