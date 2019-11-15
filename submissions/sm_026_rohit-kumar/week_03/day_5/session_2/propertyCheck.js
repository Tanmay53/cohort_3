function propertyCheck(obj, property) {
    if(obj[property] == undefined) 
        return false
    else
        return true
}


// main


// a user object with name and email
user = {
         "name"  : "Rohit",
         "email" : "rohit..@gmail.com"
}


var property = "age"

if (propertyCheck(user, property) == false)
    console.log('Property not present')
else
    console.log('Property present')

