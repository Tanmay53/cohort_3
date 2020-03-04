
function submitClick() {
    
    value = document.getElementById('os').value
    if(value == '--') {
        alert('Please select an Operating System !')
    }
    else {
        requestData(displayData, value)
    }
}

function removeAllChilds() {
    ref = document.getElementById('grid')
    all = ref.querySelectorAll('div')


    for(var i = 2; i < all.length; i++) {
        ref.removeChild(all[i])
    }
}

function displayData(data) {
    res = JSON.parse(data)
    var ref = $('#grid')

    for(var i = 0 ; i < res["codenames"].length; i++) {
        divName = document.createElement('div')
        divVer  = document.createElement('div')

        divName.innerHTML = res["codenames"][i].name
        divVer.innerHTML = res["codenames"][i].version

        ref.appendChild(divName)
        ref.appendChild(divVer)
        
    /* 
    ref = document.getElementById('grid')
    removeAllChilds()

    for(var i = 0 ; i < res["codenames"].length; i++) {
        divName = document.createElement('div')
        divVer  = document.createElement('div')

        divName.innerHTML = res["codenames"][i].name
        divVer.innerHTML = res["codenames"][i].version

        ref.appendChild(divName)
        ref.appendChild(divVer)
    } */
}

function requestData(displayData, value) {
    $.get('http://localhost:8080/codenames/' + value, function(data, status){
        if(status == 'success')
            displayData(data)
        else
            alert('some error occured !')
    })
}

