//Invoking function
console.log("Array mulitiplied with target element is:  ", return_multiplier([10, 20, 30, 40], 2));



//function to return mulitplier
function return_multiplier(arr, target) {
    var newArr = arr.map(function(element) {
        return element * target;
    });
    return newArr;
}


//input
// return_multiplier([10, 20, 30, 40], 2)
// output: Array mulitiplied with target element is:   [ 20, 40, 60, 80 ]