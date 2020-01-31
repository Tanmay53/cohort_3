userDetails = {
    username: "yashwanth.kore",
    password: "Yashwanth@1"
}
enteredPassword = "Yash@1"
function passwordVerify(userDetails,enteredPassword) {
    flag = false
    for (key in userDetails) {
        if (userDetails["password"] == enteredPassword) {
            flag = true
        }
    }
    if (flag == true) {
        console.log("Yes")
    }
    else {
        console.log("No")
    }
} passwordVerify(userDetails,enteredPassword)