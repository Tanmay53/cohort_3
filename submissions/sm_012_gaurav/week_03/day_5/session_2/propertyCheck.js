//Function to check if a key exists in an object or not.
function propertyCheck(obj, property) {
    objKeys = Object.keys(obj);
    var flag = false;   //Variable to keep track if property exists or not.
    for (var i = 0; i < objKeys.length; i++) {
        if (objKeys[i] == property) {
            flag = true;
            break;
        }
    }
    return flag;
}

