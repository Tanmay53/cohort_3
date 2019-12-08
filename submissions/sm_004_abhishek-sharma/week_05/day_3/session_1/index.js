// var addData = document.getElementById("addData")
// var clearBtn = document.getElementById('clearLocalData')
var verbose = 1
var student = {
    "studentDetails" : [
        {
            "username" : "Abhishek",
            "password" : "123"
        },
        {
            "username" : "Sujay",
            "password" : "789"
        },
        {
            "username" : "Piyush",
            "password" : "456"
        },
        {
            "username" : "Rohit",
            "password" : "000"
        }
    ]
}

var userDetails  = []

function addUser(){
    var userTextField = document.getElementById("username")
    var username = userTextField.value
    var passwordTextfield = document.getElementById("password")
    var password = passwordTextfield.value

    if(verifyUser(username, password)){
        var obj = {
            username:username,
            password:password
        }
        userDetails.push(obj)
        if(verbose){
            console.log('adding users data', obj)
            console.log('new students array is', userDetails)
        }
        var output = JSON.stringify(userDetails)
        console.log(output)
        localStorage.setItem("data", output)
    }
    
    userTextField.value = ""
    passwordTextfield.value = ""
}
// addData.addEventListener('click', addUser())

function verifyUser(name, pass){
    var size = student.studentDetails.length
    for(var i = 0; i < size; i++){
        if(name === student.studentDetails[i].username){
            if(pass === student.studentDetails[i].password){
                return true
            }
        }
    }
    alert("Invalid Username or Password")
}

function clearData(){
    console.log('clearing')
    localStorage.clear()
  }
// clearBtn.addEventListener('click', clearData)


