function passwordVarify(user, password) {
    if(user['password'] === password)
        return true
    else
        return false
}


//main
var user = { "name" : "rohit",
             "password" : "123456"}

var password = 123456


if(passwordVarify(user, password)) {
    console.log('Valid Password')
}           
else {
    console.log('Invalid Password')
}

/*
---------------------------------------- Test Cases-------------------------------------
Input                                                                       Output
var user = { "name" : "rohit",
             "password" : "123456"}

var password = "123459"                                                     Invalid Password

var user = { "name" : "rohit",
             "password" : "123456"}

var password = "123456"                                                     Valid Password

var user = { "name" : "rohit",
             "password" : "123456"}

var password = 123456                                                       Invalid Password


*/