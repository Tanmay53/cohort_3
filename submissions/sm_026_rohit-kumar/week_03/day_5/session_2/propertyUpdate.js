function updateProperty(user, property, value) {
    user[property] = value
    return user
}

// main

var user = { "name" : "rohit",
             "password" : "123456",
             "phone"    : 12345678,
             "email"    : "rohit@gmail.com"
            }

var property = "phone"
var value    = "89898989"

console.log(updateProperty(user, property, value))

/*
----------------------------- Test Case -----------------------------------------
Input                                                                   Output
var user = { "name" : "rohit",                                                      
             "password" : "123456",
             "phone"    : 12345678,
             "email"    : "rohit@gmail.com"
            }
var property = "name"
var value    = "Rohit Kumar"                                                
                                                                     { name: 'Rohit Kumar', password: '123456',
                                                                        phone: 12345678, email: 'rohit@gmail.com' }
                         
                                                                        
var property = "phone"
var value    = "89898989"                                           { name: 'rohit', password: '123456',
                                                                    phone: '89898989', email: 'rohit@gmail.com' } 



*/