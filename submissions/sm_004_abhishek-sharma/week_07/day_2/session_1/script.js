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
            // console.log(userData)
            displayBio(obj)
            
        }  
    })
    // Displaying Bio of user in a box
    function displayBio(obj){
        $("#userInfo").val("")
        if(obj.type == "user")   
            $("#userInfo").html(fillUserInfo(obj))
        else 
            $("#userInfo").html(fillAdminInfo(obj))
    }

    // Displaying normal User Bio
    function fillUserInfo(user){
        $("#userInfo").removeClass("bg-dark")
        $("#userInfo").addClass("bg-danger text-white")
        return `<div>
                    <div><h3> Hello ${user.firstName}, welcome back </h3></div>
                    <div><h3> Registered email is ${user.email}</h3></div>
                </div>`
    }

    // Displaying Admin Bio
    function fillAdminInfo(user){
        $("#userInfo").removeClass("bg-danger")
        $("#userInfo").addClass("bg-dark text-white")
        return `<div>
                    <div><h3> Hello ${user.firstName}, welcome back </h3></div>
                    <div><h3> Registered email is ${user.email} </h3></div>
                </div>`
    }

    // Filter Table
    function filterTable(){
        if($("#selectedUserType").val() == "any"){
            tableData = userData
        }
        else{
            var tableData = userData.filter(function(obj){
                return obj.type=== $("#selectedUserType").val()
            })
        }
        console.log(tableData)
        createTable(tableData)
    }

    // Event Listener for sorting the table
    $("#displayUsers").click(filterTable)

    // Deleting the user
    // $("#deleteUser").click(){
    //     var 
    // }

    // Creating the table
    function createTable(data){
        $("#userTable").empty()
        for(var i = 0; i < data.length; i++){
            console.log(data[i])

            var {type, firstName, lastName, email, username, phoneNo} = data[i]
            $("#userTable").append(`<tr>
                                        <td> ${type} </td>
                                        <td> ${firstName} </td>
                                        <td> ${lastName} </td>
                                        <td> ${email} </td>
                                        <td> ${username} </td>
                                        <td> ${phoneNo} </td>
                                        <td> <button type="submit" id="deleteUser" class="btn btn-danger">Delete User</button> </td>
                                    </tr>`)
        }
    }


});