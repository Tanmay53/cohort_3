//checking user credentials
function checkData(obj) {
    var result = null;
    var store = null;
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify(obj);

    xhr.open("POST", "http://localhost:8080/auth/login");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    // console.log("check ", xhr.response)
    xhr.addEventListener('load', function() {
        if (xhr.status <= 400) {
            // console.log(xhr.response);
            result = JSON.parse(xhr.response);
            console.log(result.token)
            var req = new XMLHttpRequest();
            req.open("GET", "http://localhost:8080/user/" + obj.username);
            req.setRequestHeader("Authorization", "Bearer " + result.token);
            req.send()
            req.addEventListener('load', function() {
                if (req.status == 200) {
                    store = req.response;
                    console.log(req.response);
                    printResponse(req.response);

                } else {
                    console.log("error ", req.status)
                }
            })

            //processing responce
            // var keep = JSON.parse(xhr.response);
            // console.log("keep ", keep)
            // console.log("status code", this.status)
        } else {
            console.log("Error Code is:" + xhr.status);
            printResponse(result)
        }
    });
}

//display data on page
function printResponse(result) {

    // var input = console.log("check here", typeof result)
    var input = JSON.parse(result);
    var status = document.getElementById('status');

    if (input == null) {
        // var para = document.createElement('p');
        // para.textContent = "The username or password was incorrect, please try again!";
        alert("The username or password was incorrect, please try again!");
        // status.appendChild(para);

    } else {
        //remove ele
        removeEle();
        // console.log("working check", input.username)

        for (key in input) {
            var td1 = document.createElement('td');
            var tr = document.createElement('tr');
            td1.textContent = key;
            tr.appendChild(td1);
            var td2 = document.createElement('td');
            td2.textContent = input[key];
            tr.appendChild(td2);
            status.appendChild(tr);
        }
    }
}




//event listener on form
var form = document.querySelector('#userDetails');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.querySelectorAll('.formEle');
    var object = {
            username: input[0].value,
            password: input[1].value
        }
        // console.log(object)
    checkData(object);
})


//remove element
function removeEle() {
    var inp = document.querySelectorAll('.rm');
    for (var i = 0; i < inp.length; i++) {
        inp[i].remove()
    }
}