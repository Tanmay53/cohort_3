function sub() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send();
    var obj = null;
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            obj = JSON.parse(xhr.response)
            console.log(obj)


            var body = document.querySelector('body');

            var table = document.createElement('table');
            table.style.marginTop ="20px"
            body.appendChild(table);

            var row = document.createElement('tr');
            table.appendChild(row);


            var col1 = document.createElement('th');
           col1.textContent = "UserId :";
           row.appendChild(col1)
           col1.style.border = "1px solid gray"
           col1.style.fontSize="20px"
           col1.style.backgroundColor="black"
           col1.style.color="white"

            var col2 = document.createElement('th');
            col2.textContent = "Id :";
            row.appendChild(col2);
            col2.style.border = "1px solid gray"
            col2.style.fontSize="20px"
            col2.style.backgroundColor="black"
            col2.style.color="white"


            var col3 = document.createElement('th');
            col3.textContent = "Title :";
            row.appendChild(col3);
            col3.style.border = "1px solid gray"
            col3.style.fontSize="20px"
            col3.style.backgroundColor="black"
            col3.style.color="white"

            var col4 = document.createElement('th');
            col4.textContent ="Body :";
            row.appendChild(col4);
            col4.style.border = "1px solid blue"
            col4.style.fontSize="20px"
            col4.style.backgroundColor="black"
            col4.style.color="white"
            // console.log(obj[0])

            for(var i=0;i<obj.length;i++){
                var row2 = document.createElement('tr');
                table.appendChild(row2);
                table.style.border = "1px solid blue"


             
             var colum1 = document.createElement('td')
             colum1.textContent =obj[i].userId
             row2.appendChild(colum1);
             colum1.style.border = "1px solid black"
            
             var colum2 = document.createElement('td')
             colum2.textContent = obj[i].id
             row2.appendChild(colum2);
             colum2.style.border = "1px solid black"


             var colum3 = document.createElement('td')
             colum3.textContent = obj[i].title
             row2.appendChild(colum3);
             colum3.style.border = "1px solid black"


             var colum4 = document.createElement('td')
             colum4.textContent = obj[i].body
             row2.appendChild(colum4);
             colum4.style.border = "1px solid black"
             
               
            }
        }
        else {
            console.log("error code is :" + xhr.status)
        }
    }
}