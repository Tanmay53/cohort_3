var storage = {};

function appendTableRows(obj, tableElement) {
    for(var i = 0; i < obj.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.textContent = obj[i]['version'];
        td2.textContent = obj[i]['name'];

        tr.appendChild(td1);
        tr.appendChild(td2);

        tableElement.appendChild(tr);
    }
}

function displayInfo() {
    var os = document.querySelector('select');
    var table = document.querySelector('table');
    table.textContent = "";

    if(storage[os.value] !== undefined) {
        appendTableRows(storage[os.value], table);
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8080/codenames/' + os.value);
        xhr.send();
        var result;

        xhr.onload = function() {
            if(xhr.status == 200) {
                result = xhr.response;
                result = JSON.parse(result);
                storage[result['os']] = result['codenames']

                appendTableRows(result['codenames'], table);
            } else {
                console.log(xhr.status);
            }
        }
    }

}

select.addEventListener('change', displayInfo);