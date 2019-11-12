// Write a function which accepts an array of integers and a target value
// remove all values in the array which are equal to the target value
// For items which are not equal to the target value, square it
// Return the new array

function arrayEqualTo(arr, target) {
    return arr.filter(function(val) {
        if(val != target) {
            return true;
        }
    }).map(function(val) {
        return val**2;
    })
}

console.log(arrayEqualTo([1,2,3,4,5], 3));