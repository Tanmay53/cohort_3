// Write a function which takes two arguments, an array and a target value
// The function should return an array where each element is multiplied by the target value

function returnMultiplier(arr, target) {
    return arr.map(function(val) {
        return val*target;
    })
}

console.log(returnMultiplier([1,2,3,4], 10));