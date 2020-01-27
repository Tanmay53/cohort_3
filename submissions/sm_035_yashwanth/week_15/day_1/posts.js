function sub() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            obj = JSON.parse(xhr.response)
            console.log(obj)
            var body = document.querySelector('body');

            var table = document.createElement('table');
            table.style.marginTop = "20px"
            body.appendChild(table);
            table.setAttribute("border", "1px");

            var row = document.createElement('tr');
            table.appendChild(row);

            var col1 = document.createElement('th');
            col1.textContent = "UserId:";
            col1.setAttribute('class', 'text-center');
            row.appendChild(col1)

            var col2 = document.createElement('th');
            col2.textContent = "Id:";
            col2.setAttribute('class', 'text-center')
            row.appendChild(col2);

            var col3 = document.createElement('th');
            col3.textContent = "Title:";
            col3.setAttribute('class', 'text-center')
            row.appendChild(col3);

            var col4 = document.createElement('th');
            col4.textContent = "completed:";
            col4.setAttribute('class', 'text-center')
            row.appendChild(col4);

            for (var i = 0; i < obj.length; i++) {
                var row2 = document.createElement('tr');
                table.appendChild(row2);
                var colum1 = document.createElement('td')
                colum1.textContent = obj[i].userId
                colum1.setAttribute('class', 'text-center')
                row2.appendChild(colum1);

                var colum2 = document.createElement('td')
                colum2.textContent = obj[i].id
                colum2.setAttribute('class', 'text-center')
                row2.appendChild(colum2);

                var colum3 = document.createElement('td')
                colum3.textContent = obj[i].title
                colum3.setAttribute('class', 'text-center')
                row2.appendChild(colum3);

                var colum4 = document.createElement('td')
                colum4.textContent = obj[i].completed
                colum4.setAttribute('class', 'text-center')
                row2.appendChild(colum4);

                if (obj[i].completed == false) {
                    row2.setAttribute('class', 'text-danger')
                }
                if (obj[i].completed == true) {
                    row2.setAttribute('class', 'text-success')
                }
            }
        }
        else {
            console.log("error code is :" + xhr.status)
        }
    }
}

// pagination

