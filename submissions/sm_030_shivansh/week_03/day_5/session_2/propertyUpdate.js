//function which will accept a user object, and property name, and a value for the property
// Update the user object key with the new value
//If the key value doesnt exist, create a new one

function propertyUpdate(object, key, value) {

    object[key] = value;

    return object;
}

var obj1 = {
    "name": "Shivansh",
    "age": 23,
}

console.log(propertyUpdate(obj1, "name", "Shivansh Singh"));
console.log(propertyUpdate(obj1, "gender", "Male"));

/**output
{ name: 'Shivansh Singh', age: 23 }
{ name: 'Shivansh Singh', age: 23, gender: 'Male' }**/