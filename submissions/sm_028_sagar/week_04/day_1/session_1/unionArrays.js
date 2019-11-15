var input1 = [5, 10, 15, 'sagar']
var input2 = [10, 5, 'sagar', 56, 89, 90]

//invoking function
console.log("union array: ", unionArrays(input1, input2))



//function for union arrays
function unionArrays(input1, input2) {
    var union = {} //sample union object
    for (var i = 0; i < input1.length; i++) {
        union[input1[i]] = input1[i];
    }
    for (var j = 0; j < input2.length; j++) {
        union[input2[j]] = input2[j];
    }
    return Object.values(union);
}

// input:
// var input1 = [5, 10, 15, 'sagar']
// var input2 = [10, 5, 'sagar', 56, 89, 90]
// output : union array:  [ 5, 10, 15, 56, 89, 90, 'sagar' ]