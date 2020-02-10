$("#submit").click(function () {
    // console.log($('#selectOs').val())
    $.ajax({
        url: 'http://localhost:8080/codenames/' + $('#selectOs').val(),
    })
        .done(function (data) {
            console.log(data);
            obj = JSON.parse(data)
            var arr = obj.codenames
            console.log(arr)

            var body = document.querySelector('body');

            var table = document.createElement('table');
            table.setAttribute('border','1px')
            body.appendChild(table);
        
            var row = document.createElement('tr');
            table.appendChild(row);
        
            var version = document.createElement('th');
            version.textContent = "version";
            row.appendChild(version)
        
            var name = document.createElement('th');
            name.textContent = "name";
            row.appendChild(name);
           
            for(var i=0;i<arr.length;i++){
                var row2 = document.createElement('tr');
                table.appendChild(row2);
                
                var colum1 = document.createElement('td');
                colum1.textContent = arr[i].version;
                row2.appendChild(colum1)

                var colum2 = document.createElement('td');
                colum2.textContent = arr[i].name;
                row2.appendChild(colum2); 
            }
        });
    });