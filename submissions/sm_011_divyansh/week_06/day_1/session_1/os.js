var data = {}
var btn = document.getElementById("btn")
btn.addEventListener("click", takedata)
function takedata() {
    var os = document.getElementById("os").value;
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/codenames/" + os
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log("successful")

            data = JSON.parse(xhr.response)
            display(data);
            console.log(data)

        }
    }
}
function display() {
    var tbl = document.getElementById("tbl");
    tbl.textContent = ""
    for (var i = 0; i < data['codenames'].length; i++) {
        var version = data['codenames'][i]['version']
        var name = data['codenames'][i]['name']
    }
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    col1.textContent = version
    row.append(col1)
    var col2 = document.createElement("td");
    col2.textContent = name
    row.append(col2)
    tbl.append(row)
}
