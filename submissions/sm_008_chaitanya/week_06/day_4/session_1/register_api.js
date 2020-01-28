$(document).ready(function () {
    // your code goes here

    $("#btn").click(function () {
        var data_obj = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#pwd").val(),
            username: $("#username").val(),
            mobile: $("#mobile").val(),
            description: $("#description").val()
        }

        data_obj = JSON.stringify(data_obj)

        $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/auth/register',
            data: data_obj,
            contentType: 'application/json'
        })
            .done(function (result_obj) {
                printData(result_obj)
            });
    });

});

function printData(output) {
    output = JSON.parse(output)
    var para = document.createElement('p')
    para.textContent = output["message"]
    para.setAttribute('class', 'h3 text-center my-3 text-danger')
    $("#main").append(para)
    
    //Resetting the input fields after the registration is being done
    $("#name").val("")
    $("#email").val("")
    $("#pwd").val("")
    $("#username").val("")
    $("#mobile").val("")
    $("#description").val("")

}