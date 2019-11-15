
user = {
    password: 12345678,
}

function userpswdchecker(givenpassword){
    if (user.password==givenpassword){
        console.log("true")
    }else {console.log("false")}
}


userpswdchecker(12345646)
userpswdchecker(12344226)
userpswdchecker(12345678)