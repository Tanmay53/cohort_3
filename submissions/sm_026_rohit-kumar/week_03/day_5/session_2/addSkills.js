function updateProperty(user, property, value) {
    user[property] = value
    return user
}

function addSkill(user, property, value) {
    return updateProperty(user, property, value)
}


// main

var user = { "name" : "rohit",
             "password" : "123456",
             "phone"    : 12345678,
             "email"    : "rohit@gmail.com"
            }

var property = "fav_color"
var value    = "blue"

console.log(updateProperty(user, property, value))

/*
----------------------------- Test Case -----------------------------------------
Input                                                                   Output
var user = { "name" : "rohit",
             "password" : "123456",
             "phone"    : 12345678,
             "email"    : "rohit@gmail.com"
            }

var property = "address"
var value    = "dehradun"                                             
                                                                     { name: 'rohit', password: '123456',
                                                                        phone: 12345678, email: 'rohit@gmail.com',
                                                                        address: 'dehradun' }

                         
                                                                        
var property = "fav_color"
var value    = "blue"
                                                                    { name: 'rohit', 
                                                                        password: '123456',
                                                                        phone: 12345678,
                                                                        email: 'rohit@gmail.com',
                                                                        fav_color: 'blue' }




*/