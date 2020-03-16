$(document).ready(function (e) {
    var obj;
    var Name;
    var Email;
    var password;
    var username;
    var Mobile;
    var Desc;
    //function called when Register button is clicked
    $("#Register").click(function (e) {
        e.preventDefault()
        Name = $("#Name").val()
        Email = $("#Email").val()
        password = $("#password").val()
        username = $("#username").val()
        Mobile = $("#Mobile").val()
        Desc = $("#Desc").val()
        if ((Name == "" || Email == "" || password == "" || username == "" || Mobile == "" || Desc == "")) {
            alert("please fill all the feilds")
        }
        else {
            obj = {
                "name": Name,
                "email": Email,
                "password": password,
                "username": username,
                "mobile": Mobile,
                "description": Desc
            }
            console.log(obj)
            alert("registered successfully")
        }


    })

    // function called when Login button is clicked
    $("#Login").click(function (e) {

        e.preventDefault()
        let user = $("#Username").val()
        let pass = $("#Password").val()
        // console.log(obj)
        if (user == "" || pass == "") {
            alert("please fill all the feilds")
        }
        else {

            // var object = {
            //     "username": user,
            //     "password": pass
            // }
            // $.ajax({
            //     url: "http://localhost:8080/auth/login",
            //     type: "POST"
                   
            // }).done(function (data) {
            //     console.log(data)
            //     alert("success")
            //     window.location.href = "file:///home/divyansh/coding/eval/form.html";


            // })
            if (user == username && pass == password) {
                alert("login successful")
                window.location.href = "file:///home/divyansh/coding/eval/form.html";

            }
            else{
                alert("login not successful")
            }

        }
    })
})



