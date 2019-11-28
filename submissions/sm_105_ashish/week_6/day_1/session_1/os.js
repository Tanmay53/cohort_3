var sData=document.querySelector('.myselect')
function getUserData(){
  event.preventDefault()
  var newdata=null
  var sd=document.querySelector('.myselect').value
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET','http://localhost:8080/codenames/'+sd);
  xhr.send()
  xhr.onload = function (){
    if(xhr.status==200){
       newdata=JSON.parse(xhr.response)
      printUserData(newdata)
      console.log(newdata)
    }
    else{
      console.log("Error Code is:" + xhr.status)
    }
  }
}
sData.addEventListener('click',getUserData)
 var prnt=document.getElementById('printUsers')
 var tab=document.getElementById('tb')

 function printUserData(res){
   tab.innerHTML=''
    res.codenames.forEach(function(ele){ 
    var tr=document.createElement('tr')
    var td1=document.createElement('td')
    var td2=document.createElement('td')
    td1.textContent=ele.version
    td2.textContent=ele.name
    tr.appendChild(td1)
    tr.appendChild(td2)
    
    tab.appendChild(tr)
 })
}
prnt.addEventListener('click',printUserData)
