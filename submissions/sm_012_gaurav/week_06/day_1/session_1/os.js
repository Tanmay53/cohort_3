var bodyElem = document.querySelector('body');
var osSelect = document.getElementById('osnames');
var tableDiv = document.querySelectorAll('.row')[1].querySelector('.col-6');
var versionArr = [];
osSelect.addEventListener('change', showData);

//Function to fetch data of a OS.
function fetchData(os) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://localhost:8080/codenames/" + os);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            versionArr.push(JSON.parse(xhr.response));
        }
        else {
            console.log("Error Code is " + xhr.status);
        }
    }
}


//Function to fetch data of all OS available.
function fetchAllData() {
    fetchData('android');
    fetchData('windows');
    fetchData('ubuntu');
    fetchData('macos');
}

bodyElem.onload = fetchAllData();


//Function to create table of the data.
function createTable(obj) {
    tableDiv.innerHTML = '';
    var table = document.createElement('table');
    table.setAttribute('class', 'table table-dark');
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.setAttribute('scope', 'col');
    th2.setAttribute('scope', 'col');
    th1.textContent = "Version";
    th2.textContent = "Name";
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    var arr = obj['codenames'];
    arr.forEach(function (ele) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        td1.textContent = ele["version"];
        td2.textContent = ele["name"];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    });
    tableDiv.appendChild(table);
}

function showData() {
    var name = this.value;
    var obj = versionArr.filter(function(ele) {
        return ele["os"] === name;
    })
    createTable(obj[0]);
}