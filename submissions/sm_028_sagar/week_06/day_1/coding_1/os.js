//adding event listener
var select = document.getElementById('os');
select.addEventListener('change', function() {
    var value = document.getElementById('os').value;
    getData(printData, value);
});



//function for getting data
function getData(printData, value) {
    var result = null;
    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/codenames/' + value;

    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            result = xhr.response;
            printData(result)
        } else {
            console.log("Error code is: " + xhr.status);
            printData(result);
        }
    }

    xhr.addEventListener('error', function(event) {
        console.log('Error in HTTP request! ' + this.status)
    });
}


//function for printing data
var printData = function(input) {

    var data = JSON.parse(input);
    console.log("check", data.codenames[0]);
    // console.log("os", data.os)


    //removing input
    var removeInput = document.querySelectorAll('.input');
    for (var k = 0; k < removeInput.length; k++) {
        // console.log(removeInput[k])
        removeInput[k].remove();
    }
    //print output

    if (input == null) {
        display.textContent = "Error! No user data received or invalid request";
    } else {


        var cont = document.getElementById('cont');
        var os_name = document.getElementById('os_name');
        os_name.textContent = "Operating System :- " + data.os;

        for (var i = 0; i < data.codenames.length; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute("class", "input");
            var ver = document.createElement('td');
            ver.textContent = data.codenames[i].version;
            tr.appendChild(ver);

            var verName = document.createElement('td');
            verName.textContent = data.codenames[i].name;
            tr.appendChild(verName);
            cont.appendChild(tr)
        }
    }
}