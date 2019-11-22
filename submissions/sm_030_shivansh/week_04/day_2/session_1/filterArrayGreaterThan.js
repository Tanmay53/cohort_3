//unction which accepts an array and a target value
//Use filter to remove all values in the array which are equal and greater than the target value

function filterGreater(array, target) {

    var result = array.filter(function (element) {
        return element < target;
    })

    return result;
}









console.log(filterGreater([1, 2, 3, 4, 5, 6, 6, 8, 9], 5));
console.log(filterGreater([10, 29, 3, 4, 5, 600, 6, 800, 9], 50));