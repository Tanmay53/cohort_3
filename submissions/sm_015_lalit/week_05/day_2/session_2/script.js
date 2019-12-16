function createEntry(){
    var parentTable=document.getElementById("parentTable")
    var newtr=document.createElement("tr")
    parentTable.appendChild(newtr)
    
    var td1=document.createElement('td')
    var td2=document.createElement('td')
    var td3=document.createElement('td')

    td1.textContent=document.getElementById('product').value
    td2.textContent=document.getElementById('price').value
    td3.textContent=document.getElementById('quantity').value


    newtr.appendChild(td1)
    newtr.appendChild(td2)
    newtr.appendChild(td3)
    
}
function changefontSize(){
   var trAll= document.querySelectorAll("tr")
   for (i=1;i<trAll.length;i++){
       trAll[i].style.fontSize= (i*10)+"px"
   }
}
function changebgColor(){
    val1=Math.floor(Math.random()*100);
    val2=Math.floor(Math.random()*255);
    val3=Math.floor(Math.random()*255);
   var trAll= document.querySelectorAll("tr")
   for (i=1;i<trAll.length;i++){
       if (i%2==0){
       trAll[i].style.background= "rgb("+val1+","+val2+","+val3+")"}
       else {trAll[i].style.background= "rgb("+val2+","+val1+","+val3+")" }
   }
}
function changefontColor(){
    val1=Math.floor(Math.random()*100);
    val2=Math.floor(Math.random()*255);
    val3=Math.floor(Math.random()*255);

   var trAll= document.querySelectorAll("tr")
   for (i=1;i<trAll.length;i++){
       trAll[i].style.color= "rgb("+val1+","+val2+","+val3+")"
   }
}
