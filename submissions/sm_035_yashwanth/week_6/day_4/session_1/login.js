$("#btn").click(function () {
    var data = JSON.stringify(
        {
            username: $("#username").val(),
            password: $("#password").val(),
        }
    )
    var jsonData = data
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/auth/login',
        data: jsonData,
        contentType: "application/json"
    })
        .done(function (data) {
            console.log(data);
            obj = JSON.parse(data)
            var arr = obj.token
            alert(arr)
        })
        .fail(alert("Invalid login creadentials"))
            
});
// {
//     "name": "masaischool",
//     "email": "hello@masai.com"
//     "password": "secret",
//     "username": "masai-school",
//     "mobile": "9876543210",
//     "description": "A Transformation in education!" 
// }