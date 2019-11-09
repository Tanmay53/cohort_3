// Write a function which will accept a user object, and property name, and a value for the property
// Update the user object key with the new value
// If the key value doesnt exist, create a new one

function propertyUpdate(userObj, propertyName, newPropertyValue) {
 // Updating/Adding the user object key with the new value 
 // and If the key value doesnt exist, creating a new one
 userObj[propertyName] = newPropertyValue
 console.log(userObj)
 return userObj
}

var userObj = {
 name: 'Chinmay',
 email: 'chinmay@masai.com',
 password: 'test@1234'
}
var propertyName = "name"
var newPropertyValue = "Samurai"

// var propertyName = "city"
// var newPropertyValue = "Banglore"

// Invoking function
propertyUpdate(userObj, propertyName, newPropertyValue)