

function sbmit() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var details = {
        name: name,
        email: email,
        password: password
    }
    details = JSON.stringify(details)
    console.log(details)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://reqres.in/api/users?page=2")
    xhr.setRequestHeader('Content-type',
        'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status == 201) {
            console.log(xhr.response)
            console.log('success')
          displayData(xhr.response)
        }
        else {
            console.log("errror code is:xhr.status")
        }
function displayData(response){

          var result = JSON.parse(xhr.response)
            console.log(result)
            alert("you are registered success fully")
            var tble = document.querySelector('.table')
                var child = document.createElement('tr')
                var tr = document.createElement("tr")

                tble.append(tr)
                var th = document.createElement("th")
                th.innerHTML = result.name
                tble.appendChild(th)
                var th1 = document.createElement("th")
                th1.innerHTML = result.email
                tble.appendChild(th1)
                var th2 = document.createElement("th")
                th2.innerHTML = result.password
                tble.appendChild(th2)
          
            
        }
        
    }

    xhr.send(details)
}

