gotData={}

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

function printData() {
    tableP.textContent=""
    for (i = 0; i < gotData['codenames'].length; i++) {
        var versionCode = gotData['codenames'][i]['version']
        var nameCode = gotData['codenames'][i]['name']
        displayData(versionCode, nameCode)
    }
}

function getData() {
    var osSelected = document.getElementById("osSelect").value
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/codenames/' + osSelected)
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log("Request Served Successfull")
            //    console.log(xhr.response)
            gotData = JSON.parse(xhr.response)
            printData()
            console.log(gotData)


            //    return xhr.response
        } else {
            console.log(xhr.status)
            alert(xhr.status)
        }

    }

}




// gotData=getData()

btnSub.addEventListener("click", getData)
// ..
// displayData()