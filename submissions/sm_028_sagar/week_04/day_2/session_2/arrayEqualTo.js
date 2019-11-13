//Invoking function
console.log(array_equalto([10, 4, 5, 6, 9, 10, 8], 10));


//function to remove filter array with target value and square remaining 
function array_equalto(arr, target) {
    var newArr = arr.filter(function(element) {
        return element !== target;
    }).map(function(element) {
        return element * element;
    })
    return newArr;
}


//input:
//array_equalto([10, 4, 5, 6, 9, 10, 8], 10)
//output: [ 16, 25, 36, 81, 64 ]