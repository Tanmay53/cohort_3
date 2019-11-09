function createUser(name, email, password) {
    newUser = {}

    newUser['name']     = name
    newUser['email']    = email
    newUser['password'] = password    

    return newUser
}


// main

var name    = "rohit"
var email   = "rohit@gmail.com"
var passwd  = "rohit@123"

console.log(createUser(name, email, passwd))

