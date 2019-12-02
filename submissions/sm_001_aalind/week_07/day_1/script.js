$("#registerBtn").click(function(event) {
    event.preventDefault();
    var email = $("#email").val();
    var pssd = $("#pssd").val();

    var login = {
        "email": email,
        "password": pssd
    };
    login = JSON.stringify(login);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://reqres.in/api/login");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(login);

    xhr.onload = function() {
        if(xhr.status == 200) {
            result = JSON.parse(xhr.response);
            $(".container").text(result.token)
        } else {
            console.log("ERROR");
        }
    }
})