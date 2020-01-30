var res = {}
var result=[]
$("#btn_sub").click(function () {
    function userDetails(firstname = "yash", lastname = "Kore", username = "Yash Kore", password = "123", email = "yashwanthkore97@gmail.com", address = "3-193", phoneno = "9542814635", selct = "user") {
        return {
            "firstname": firstname,
            "lastname": lastname,
            "username": username,
            "password": password,
            "email": email,
            "address": address,
            "phoneno": phoneno,
            "selct": selct
        }
    }
    var user = userDetails(
        $("#firstname").val() || undefined,
        $("#lastname").val() || undefined,
        $("#username").val() || undefined,
        $("#password").val() || undefined,
        $("#email").val() || undefined,
        $("#address").val() || undefined,
        $("#phoneno").val() || undefined,
        $("#selct").val() || undefined
    )
    console.log(user)
    // res.push(user)
    localStorage.setItem("user", JSON.stringify(res))

    // console.log(user.firstname)
    // var getuser = localStorage.getItem("user")
     

    var userInform = document.getElementById("userInform")
    var userdata = document.createElement('option')
    userdata.textContent = user.firstname
    // console.log(userdata)
    userInform.appendChild(userdata)

    if (user.selct == "user") {
        var u = document.createElement('h2')
        u.textContent = `Hello ${user.firstname}, welcome back,
                          Registered email is ${user.email} you are ${user.selct}`
        $("#use").append(u)
    }
    if (user.selct == "admin") {
        var a = document.createElement('h2')
        a.textContent = ` Hello ${user.firstname}, welcome back,
                          Registered email is ${user.email} ,you are ${user.selct}`
        $("#admin").append(a)
    }
    // for (i = 0; i < getuser.length; i++) {
    //     flag = true
    //     for (j = 0; j < res.length; j++) {
    //         if (getuser[i] == res[j]) {
    //             flag = false
    //             break;
    //         }
    //     }
    //     if (flag == true)
    //         result.push(getuser[i])
    // }
})

