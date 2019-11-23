//function which accepts an array of integers and a target value
//remove all values in the array which are equal to the target value
//For items which are not equal to the target value, square it


function arrayEqualTo(array, target) {
    var result = array
        .filter(function (element) {
            if (element !== target)
                return element
        })
        .map(a => a * a);

    return result;
}


console.log(arrayEqualTo([1, 2, 3, 4, 5], 5));

console.log(arrayEqualTo([1, 20, 3, 5, 7, 6, 4, 5], 5));