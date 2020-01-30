$("#sub").click(function () {
    var data = JSON.stringify(
        {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#pwrd").val(),
            username: $("#username").val(),
            mobile: $("#mob").val(),
            description: $("#descrp").val()
        }
    )
    var jsonData = data
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/auth/register',
        data: jsonData,
        contentType: "application/json"
    })
        .done(function (data) {
            console.log(data);
        });
});
$('#email').hide()
$('#pwrd').hide()
$('#username').hide()
$('#mob').hide()
$('#descrp').hide()
$('#sub').hide()
$('#name').keyup(function () {
    var value = $('#name').val();
    $("#live").text(value);
    if (value.length > 15) {
        alert("Invalid Name")
    }
    if (value == "masaischool") {
        alert("true")
        $('#email').show()
    }
});
$('#email').keyup(function () {
    var emailval = $('#email').val();
    $("#live").text(emailval);
    if (emailval == "hello@masai.com") {
        alert("true")
        $('#pwrd').show()
        // $('#username').show()
        $('#mob').show()
        // $('#descrp').show()
        $('#sub').show()
        $("#live").text("")
    }
})
$('#mob').keyup(function () {
    var value = $('#mob').val();
    if (value.length > 10) {
        alert("mobile number is invalid")
    }
});

function submit() {
    $("#name").hide()
    $('#email').hide()
    $('#pwrd').hide()
    $('#username').hide()
    $('#mob').hide()
    $('#descrp').hide()
    $('#sub').hide()
    var body = document.querySelector('body')
    var mainblock = document.createElement('div')
    body.appendChild(mainblock)
    mainblock.style.background = "black"
    mainblock.style.color = "white"

    var namehead = document.createElement('h2')
    namehead.textContent = "Name"
    mainblock.appendChild(namehead)
    var nameof = document.createElement('h1')
    nameof.textContent = $("#name").val()
    namehead.appendChild(nameof)

    var emailhead = document.createElement('h2')
    emailhead.textContent = "Email"
    mainblock.appendChild(emailhead)
    var emailof = document.createElement('h1')
    emailof.textContent = $("#email").val()
    emailhead.appendChild(emailof)

    var mobhead = document.createElement('h2')
    mobhead.textContent = "Mobile"
    mainblock.appendChild(mobhead)
    var mobof = document.createElement('h1')
    mobof.textContent = $("#mob").val()
    mobhead.appendChild(mobof)
}

// {
//     "name": "masaischool",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!" 
// }
