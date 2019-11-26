function getData(){
   var osValue = document.getElementById('formSelect').value;
   var result = null;
   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://localhost:8080/codenames/' +osValue)
   xhr.send();
   xhr.onload = function (){
       if(xhr.status == 200){
           result = JSON.parse(xhr.response);

           displayFun(result);
       }else{
           console.log('Error code is :' + xhr.status);
       }
   }
}
var cont = document.getElementById('tBody');
function displayFun(input){
    cont.innerHTML = "";
    input.codenames.forEach(function(ele){
        
         var tr =  document.createElement('tr');
         var td1 =  document.createElement('td');
         td1.textContent = ele.version;
         var td2 = document.createElement('td');
         td2.textContent = ele.name;

         tr.appendChild(td1);
         tr.appendChild(td2);
         cont.appendChild(tr);
    })
}

