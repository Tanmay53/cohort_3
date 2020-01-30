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
            obj = JSON.parse(data)
            var arr = obj.message
            alert(arr)
        });
});
// {
//     "name": "masaischool",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!" 
// }
