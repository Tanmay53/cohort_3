function displayData(x, y) {
    var nRow = document.createElement("tr")
    tableP.appendChild(nRow)
    var tCol1 = document.createElement("td")
    tCol1.textContent = x
    nRow.appendChild(tCol1)
    var tCol2 = document.createElement("td")
    tCol2.textContent = y
    nRow.appendChild(tCol2)

}

function printData(input) {
    tableP.textContent = ""
    for (i = 0; i < input['codenames'].length; i++) {
        var versionCode = input['codenames'][i]['version']
        var nameCode = input['codenames'][i]['name']
        displayData(versionCode, nameCode)
    }
}

function getData() {
    var osSelected = document.getElementById("osSelect").value
    var request = $.ajax({
        url: 'http://localhost:8080/codenames/' + osSelected,
    })
    request.done(function (data) {
        console.log(data)
        var gotData = JSON.parse(data)
        printData(gotData)
    })
    request.fail(function () {
        console.log("Request Failed")
    })
}


btnSub.addEventListener("click", getData)