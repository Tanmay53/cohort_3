$(document).ready(function () {
    // your code goes here
    var userData = []
    
    // Storing the User Data in an object
    $("#addUser").click(function(e){
        e.preventDefault()
        if($("#inputEmail").val() == "" || $("#userType").val() == "" || $("#username").val() == "" || $("#inputPassword").val() == "" ){
            alert("Required Fields are empty!")
            $(".inputEle").val("")
        }
        // console.log(count++)
        else{
            var obj = {
                type: $("#userType").val(),
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#inputEmail").val(),
                password: $("#inputPassword").val(),
                username: $("#username").val(),
                phoneNo: $("#phoneNo").val(),
                address: $("#address").val()
            }
            $(".inputEle").val("")
            userData.push(obj)
            console.log(userData)
            displayBio(obj)
            
        }  
    })
    // Displaying Bio of user in a box
    function displayBio(obj){
        $("#userInfo").val("")
        if(obj.type == "user"){
            $("#userInfo").removeClass("bg-dark")
            $("#userInfo").addClass("bg-danger text-white")
            $("#userInfo").html(fillUserInfo(obj))
        }
        else {
            $("#userInfo").removeClass("bg-danger")
            $("#userInfo").addClass("bg-dark text-white")
            $("#userInfo").html(fillAdminInfo(obj))
        }

    }
    // Displaying normal User Bio
    function fillUserInfo(user){
        return `<div>
                    <div><h3> Hello ${user.firstName}, welcome back </h3></div>
                    <div><h3> Registered email is ${user.email}</h3></div>
                </div>`
    }
    // Displaying Admin Bio
    function fillAdminInfo(user){
        return `<div>
                    <div><h3> Hello ${user.firstName}, welcome back </h3></div>
                    <div><h3> Registered email is ${user.email} </h3></div>
                </div>`
    }

    // Displaying the User Data in the table
    $("#displayUsers").click(function(e){
        e.preventDefault()
        $("#userTable").empty()
        for(var i = 0; i < userData.length; i++){
            console.log(userData[i])

            var {type, firstName, lastName, email, address, phoneNo} = userData[i]
            $("#userTable").append(`<tr>
                                        <td> ${type} </td>
                                        <td> ${firstName} </td>
                                        <td> ${lastName} </td>
                                        <td> ${email} </td>
                                        <td> ${address} </td>
                                        <td> ${phoneNo} </td>
                                    </tr>`)
        }

    })


});