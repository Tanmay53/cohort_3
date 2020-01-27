
function sub() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://localhost:8080/codenames/' + document.getElementById('selectOs').value);
    xhr.send();
    var obj = null;
    var arr = null;
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            obj = JSON.parse(xhr.response)
            var arr = obj.codenames
              console.log(arr)
            var body = document.querySelector('body');

            var table = document.createElement('table');
            body.appendChild(table);

            var row = document.createElement('tr');
            table.appendChild(row);

            var version = document.createElement('th');
            version.textContent = "version";
            row.appendChild(version)
            version.style.border = "1px solid black"

            var name = document.createElement('th');
            name.textContent = "name";
            row.appendChild(name);
            name.style.border = "1px solid black"


            // var head =document.getElementById("version")
            for(var i=0;i<arr.length;i++){
                var row2 = document.createElement('tr');
                table.appendChild(row2);
                table.style.border = "1px solid black"
                
                var colum1 = document.createElement('td');
                colum1.textContent = arr[i].version;
                row2.appendChild(colum1)
                colum1.style.border = "1px solid black"


                var colum2 = document.createElement('td');
                colum2.textContent = arr[i].name;
                row2.appendChild(colum2);
                colum2.style.border = "1px solid black"

            }

        }
        else {
            console.log("error code is :" + xhr.status)
        }
    }

}
