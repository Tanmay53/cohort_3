var osValue = document.getElementById("selVal");
osValue.addEventListener("change", callApi);

var result = {};

function callApi() {
    // console.log("hi")
    var osVal = document.getElementById('selVal').value;
    console.log(osVal)

    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/codenames/' + osVal
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            result = JSON.parse(xhr.response);
            show();
            // var disp = document.getElementById("apidata");
            // disp.innerHTML = result;
        }
        else {
            console.log("Error Code is: " + xhr.status);
        }
    }
    
}

function show() {
    console.log(result)
    var disp = document.getElementById("apidata");

    var table = document.createElement('table');
    table.style.border = "1";
    disp.appendChild(table);
    var tableRo = document.createElement('th');
    tableRo.innerHTML = result["os"] 
    table.appendChild(tableRo);

    // console.log(key)
    // console.log(Object.values(result[key]))
    
    for (var i = 0; i < result["codenames"].length; i++) {
        var tableRow = document.createElement('tr');
        tableRow.style.border = "1";
        table.appendChild(tableRow);
        
        var td1 = document.createElement('td');
        td1.innerHTML = result["codenames"][i]["name"]
        tableRow.appendChild(td1);
        var td2 = document.createElement('td');
        td2.innerHTML = result["codenames"][i]["version"]
        tableRow.appendChild(td2);
    }
}