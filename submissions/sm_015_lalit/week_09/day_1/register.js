
function getData(){
var usr=document.getElementById("inputEmail").value
var pswd=document.getElementById("inputPassword").value
obj={
    email:usr,
    password:pswd
}
json=JSON.stringify(obj)
var xhr=new XMLHttpRequest();
xhr.open("POST","https://reqres.in/api/login")
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(json)
xhr.onload = function(){
    if (xhr.status==200){
        console.log(xhr.response)
        dataIn=JSON.parse(xhr.response)
        $("#formParent").hide()
        for(key in dataIn){
        $("#Parent").html("<p>"+key+" : "+dataIn[key]+"</p>")}
        console.log(dataIn)
    }
    else{console.log(xhr.status)}
 }
}
loginBtn.addEventListener("click",getData)

