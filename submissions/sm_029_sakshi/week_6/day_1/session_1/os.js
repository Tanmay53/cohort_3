function submitClick() {
    value = document.getElementById('os').value
    if(value == '--') {
        alert('Please select an Operating System !')
    }
    else {
        requestData(displayData, value)
    }
}

function requestData(displayData, value) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:8080/codenames/' + value)
    xhr.send()
    xhr.onload = function() {
        if(xhr.status == 200)
            displayData(xhr.response)

        else
            alert('some error occured ')
    }
}

function displayData(response) {
    res = JSON.parse(response)
    ref = document.getElementById('grid')

    for(var i = 0 ; i < res["codenames"].length; i++) {
        divName = document.createElement('div')
        divVer  = document.createElement('div')

        divName.innerHTML = res["codenames"][i].name
        divVer.innerHTML = res["codenames"][i].version

        ref.appendChild(divName)
        ref.appendChild(divVer)
    }
}
