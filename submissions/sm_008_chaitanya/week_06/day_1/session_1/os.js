function getUser(display) {
    var result = null
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8080/codenames/' + document.getElementById('operatingSystems').value);
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            result = xhr.response
            display(result)
        }
        else {
            console.log('Error code id:' + xhr.status)
        }
    }
}

function printUser(input) {
    var output = document.getElementById("out")
    var tab = document.createElement('table')
    var row = document.createElement('tr')
    var col1 = document.createElement('th')
    col1.innerHTML = "Version"
    row.appendChild(col1)
    var col2 = document.createElement('th')
    col2.innerHTML = "Name"
    row.appendChild(col2)
    tab.appendChild(row)

    output.innerHTML = "";
    if (input != null) {
        var final = JSON.parse(input)
        for (i = 0; i < final['codenames'].length; i++) {
            var row = document.createElement('tr')
            var col_1 = document.createElement('td')
            col_1.textContent = final['codenames'][i].version
            row.appendChild(col_1)
            var col_2 = document.createElement('td')
            col_2.textContent = final['codenames'][i].name
            row.appendChild(col_2)
            tab.appendChild(row)
        }
    }
    else {
        console.log('Error! No User data received or invalid Request')
    }
    output.append(tab)
    tab.setAttribute("class", "bg-info display-4 text-center mx-auto table thead-dark col-6  col-lg-3 rounded")
}

var choosen = document.getElementById('operatingSystems')
choosen.addEventListener('change', function () {
    getUser(printUser)
})