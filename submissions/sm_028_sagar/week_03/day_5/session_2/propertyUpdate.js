var userObject = { //input object
    name: 'sagar'
}
var propertyName = 'Ulhas Nagar';
var propertyValue = '6,20,000';

//Invoking function
var updatedObject = propertyUpdate(userObject, propertyName, propertyValue)
console.log(updatedObject)


//function for property check
function propertyUpdate(object, name, value) {

    object['propertyName'] = name;
    object['propertyValue'] = value;
    return object;
}