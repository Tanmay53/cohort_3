var os= document.getElementById("osType");
os.addEventListener("change",typeOs)
function typeOs()
{
    var val=event.target.value;
    var baseUrl="http://localhost:8080/codenames";
    var url= baseUrl +"/"+ val;
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = function (){
        if(xhr.status == 200){
            var out = JSON.parse(xhr.response);
            var table=document.getElementById('table')
            var tr=document.createElement('tr');
            var th=document.createElement('th');
            th.innerHTML=out.os;
            tr.appendChild(th)
            table.appendChild(tr)
            out.codenames.forEach(function(val){
                var tr=document.createElement('tr');
                for(key in val)
                {
                    var td=document.createElement('td');
                    td.innerHTML=val[key];
                    tr.appendChild(td)
                }

                table.appendChild(td)
            })

        }
        else{
            console.log("Error Code is:" + xhr.status)
        }
      }

}