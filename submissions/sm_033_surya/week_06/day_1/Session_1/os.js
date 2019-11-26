

function loader(printValue) {
    var xhr = new XMLHttpRequest();
    // var os = document.getElementById("osName").value
    var os = document.getElementById("picklist").value
    console.log(os)

    var url = "http://localhost:8080/codenames/" + os
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.response)
            return printValue(data)
        }
        else {
            console.log("Error code is" + xhr.status)
        }
    }
}
function inputValue(data) {
    console.log(data.codenames.length)
    var table = document.querySelector("table")
    var tr = document.querySelector("tr")
    table.setAttribute("id", "table")

    table.textContent = ""
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.innerHTML = "os_Version_name"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "version"
    tr.appendChild(td)
    table.appendChild(tr)

    for (i = 0; i < data.codenames.length; i++) {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        // console.log(data.codenames[i].name)
        // console.log(data.codenames[i].version)

        td.innerHTML = data.codenames[i].name
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data.codenames[i].version
        tr.appendChild(td)
        table.appendChild(tr)
    }
}
// var load = document.getElementById("load")
// load.addEventListener("click",function(){loader(inputValue)})
var pick = document.getElementById("picklist")
pick.addEventListener("click", function () { loader(inputValue) })