'use-strict;'

var registeredUsersArr = []
function registration() {
    let username = document.querySelector('#username').value;
    let emailAddress = document.querySelector('#emailAddress').value;
    let password = document.querySelector('#password').value;
    // let userType = document.querySelectorAll("user_type").value;
    // console.log(userType)

    let usersObj = { username: username, emailAddress: emailAddress, password: password };
    // for(var i=0; i<userType.length; i++){
    //     var usertype = document.querySelectorAll("user_type").value;
    //     usersObj['userType'] = usertype;

    // 

    console.log(usersObj);
    registeredUsersArr.push(usersObj);



    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsersArr));
    // localStorage.clear();
    myStorage = window.localStorage;
    console.log(myStorage)
    console.log(registeredUsersArr)
    alert("Registration Success")
    window.location.href = "index.html";


}


function getData() {

    users = JSON.parse(localStorage.getItem("registeredUsers"));
    var userLogin = document.querySelector("#username").value;
    var userPassword = document.querySelector("#password").value;
    console.log(userLogin, userPassword)
    console.log(users)

    for (var i = 0; i < users.length; i++) {
        console.log(users[i]["username"])
        if (users[i]["username"] == userLogin && users[i]["password"] == userPassword) {
            console.log("Success");
            window.location.href = "dash.html";
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var loginSuccess = document.querySelector("#loginSuccess");
            loginSuccess.innerHTML = time
            console.log("success")
        }
        else {
            console.log("Login Failed")
        }

    }

}



