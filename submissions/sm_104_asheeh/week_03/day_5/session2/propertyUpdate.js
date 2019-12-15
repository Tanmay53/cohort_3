function propertyUpdate(object, property, propertyValue)
{
    object[property] = propertyValue;
}

var person = {
    firstName : "Ashish",
    lastName : "Pratap",
    age : "25"
};

// var key = "lastName";
// propertyUpdate(person, key, "Kumar");
var key = "appearance";
propertyUpdate(person, key, "Sunder Pichai")
console.log(person);