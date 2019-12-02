var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://reqres.in/api/users?page=2');
  xhr.send()
  xhr.onload = function (){
    if(xhr.status == 200){
        var out = JSON.parse(xhr.response);
            console.table(out.data)
            var table=document.getElementById('table')
            var tr=document.createElement('tr');
            var th=document.createElement('th');
            th.innerHTML="User Details";
            tr.appendChild(th)
            table.appendChild(tr)
            
            
            
    }
    else{
        console.log("Error Code is:" + xhr.status)
    }
  }