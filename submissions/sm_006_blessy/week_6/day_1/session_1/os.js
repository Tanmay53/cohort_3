 function sbmit(){
 var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:8080/codenames/'+document.getElementById("os").value)
xhr.send()
xhr.onload = function(){
    if(xhr.status == 200){
        console.log(xhr.response)
        displayData(xhr.response)
    }
    else{
        console.log('error code is:xhr.status')
    }
}
 }
 function displayData(response){
respon = JSON.parse(response)
console.log(respon)
var tble = document.querySelector(".table")
for(var i =0;i<respon["codenames"].length;i++){
var tr = document.createElement("tr")

tble.append(tr)
var th = document.createElement("th")
th.innerHTML = respon["codenames"][i].name
tble.appendChild(th)
var th1 = document.createElement("th")
th1.innerHTML = respon["codenames"][i].version
tble.appendChild(th1)
}

 }