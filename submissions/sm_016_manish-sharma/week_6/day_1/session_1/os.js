function submit() {

    var sel = document.getElementById('select')
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http:/localhost:8080/codenames/'+sel.value);
    xhr.send()
    xhr.onload = function () {

        if (xhr.status == 200) {
            // console.log(xhr.response)
            var data = JSON.parse(xhr.response)
            var table= document.getElementById('table')

            var contents= document.querySelectorAll('tr')
            for(j=0;j<contents.length;j++){
                contents[j].innerHTML=''
            }

            var tr= document.createElement('tr')
            for(i=0;i<data.codenames.length;i++){
                var tr= document.createElement('tr')
                table.appendChild(tr)
                td1= document.createElement('td')
                tr.appendChild(td1)
                td1.textContent= data.codenames[i].version
                td2= document.createElement('td')
                tr.appendChild(td2)
                td2.textContent= data.codenames[i].name
            }
        
            
        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }
}