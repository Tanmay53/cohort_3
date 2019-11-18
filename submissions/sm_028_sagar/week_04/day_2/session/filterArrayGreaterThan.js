//Invoking array and target value
console.log(filter_array_greater_than([4, 5, 6, 2, 3, 10, 9], 6));


//function to remove elements equal or greater than target ele
function filter_array_greater_than(arr, target) {
    var newArr = arr.filter(function(element) {
        return element < target;
    })
    return newArr;
}



//input
//filter_array_greater_than([4, 5, 6, 2, 3, 10, 9], 6)
//output: [ 4, 5, 2, 3 ]