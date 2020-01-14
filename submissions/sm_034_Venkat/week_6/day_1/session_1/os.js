// var submit = document.getElementById("osSelect");
// submit.addEventListener("onchange", showOsDetails);

function showOsDetails() {
    var selectedOs = document.getElementById("osSelect").value;
    // console.log(selectedOs);
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8080/codenames/' + selectedOs);
    xhr.send()
    xhr.onload = function () {

        if (xhr.status == 200) {
            alert("Success..!")
            var resultObj = JSON.parse(xhr.response)
            var codenames = resultObj.codenames
            // console.log('codenames', codenames)

            var body = document.querySelector('body')
            var h3 = document.createElement('h2')
            h3.textContent = 'OS Name is '+ selectedOs;
            body.append(h3)

            var table = document.createElement('table')
            var trHead = document.createElement('tr')
            var th1 = document.createElement('th')
            th1.textContent = "Version Name"
            th1.style.border= "1px solid"
            trHead.append(th1)

            var th2 = document.createElement('th')
            th2.textContent = "Number"
            th2.style.border= "1px solid"
            trHead.append(th2)
            table.append(trHead)

            for (i = 0; i < codenames.length; i++) {
                var tr = document.createElement('tr')
                
                var td1 = document.createElement('td')
                td1.textContent = codenames[i].name
                td1.style.border= "1px solid"
                tr.append(td1)

                var td2 = document.createElement('td')
                td2.textContent = codenames[i].version
                td2.style.border= "1px solid"
                tr.append(td2)

                table.append(tr)
            }
            table.style.border="1px solid blue"
            table.style.textAlign= "center"
            body.append(table)
        }
        else {
            console.log("Error code is " + xhr.status)
        }
    }
}