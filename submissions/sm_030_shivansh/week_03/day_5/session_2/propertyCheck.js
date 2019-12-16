// function  to  check whether a property exits in an objects

function propertyCheck(object, property) {
    if (object[property] === undefined)
        return false;
    else
        return true;
}

var obj1 = {
    "name": "Shivansh Singh",
    "age": 23,
}

console.log(propertyCheck(obj1, "name"));
console.log(propertyCheck(obj1, "gender"));