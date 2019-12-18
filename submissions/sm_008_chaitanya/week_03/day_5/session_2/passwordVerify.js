function passWordverify(user, input) {
    flag = false
    for (key in user) {
        if (user["password"] === input) {
            flag = true
        }
    }
    if (flag == true) {
        console.log("True")
    }
    else {
        console.log("False")
    }
}
var user = {
    name: 'chathan',
    email: 'chathan2569@gmail.com',
    password: 'Masai123@',
}
var input = "masai123@"
passWordverify(user, input)