//function to post data 
function postData(obj) {
    var xhr = new XMLHttpRequest();

    var json = JSON.stringify(obj);

    xhr.open("POST", 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    console.log(json)

    xhr.addEventListener('load', function() {
        if (xhr.status == 200) {
            console.log(xhr.response)
        } else if (xhr.status == 401) {
            console.log(xhr.status)
        }
    });

    xhr.addEventListener('error', function(event) {
        var state = document.getElementById('status');
        state.textContent = 'Error in HTTP request! ' + this.status;
        console.log('Error in HTTP request! ' + this.status)
    });
}


//EventListener on forms
var form = document.getElementById('personDetails');

form.addEventListener('submit', function(event) {
    event.preventDefault(); //prevents default behaviour of submit
    var inputElements = document.querySelectorAll('.formEle');
    var object = {
        name: inputElements[0].value,
        email: inputElements[1].value,
        password: inputElements[2].value,
        username: inputElements[3].value,
        mobile: inputElements[4].value,
        description: inputElements[5].value
    }
    console.log(object);
    postData(object);
})