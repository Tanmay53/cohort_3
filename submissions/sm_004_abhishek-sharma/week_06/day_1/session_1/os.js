var displayBtn = document.getElementById('printOS')
// var displayBtn = document.getElementById('osType')
var table = document.querySelector('tbody');
displayBtn.addEventListener('click', function () {
    // var osType = displayBtn.value
    var osType = document.getElementById('osType').value
    getOSData(printOSTypes, osType)
})

var printOSTypes = function (input) {
    table.innerHTML = ""
    for (var i = 0; i < input.codenames.length; i++) {
        var row = document.createElement('tr')
        row.innerHTML = "<td>" + (i + 1) + "</td><td>" + input.codenames[i].version + "</td><td>" + input.codenames[i].name + "</td>"
        table.appendChild(row)
    }
}

var osDetails = []
function storeData(data){
    osDetails.push(data)
    localStorage.setItem("osTypes", osDetails)
}

function getOSData(displayFunction, type) {
    var result = null, obj = null;
    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/codenames/' + type;
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            result = xhr.response;
            storeData(result)
            obj = JSON.parse(result)
            console.log(result)
            displayFunction(obj);
        }
        else {
            console.log("Error Code is:" + xhr.status);
        }
    }
}