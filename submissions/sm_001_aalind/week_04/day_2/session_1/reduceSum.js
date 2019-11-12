// Write a function which accepts an array and an integer k
// Find the total sum of integers in the array using reduce which are greater than the value k
// Return the sum

function reduceSum(arr, k) {
    return arr.reduce(function(accumulator, val) {
        if(val > k) {
            return accumulator + val;
        } else {
            return accumulator + 0;
        }
    }, 0);
}

console.log(reduceSum([1,2,3,4,5,6,7,8,9], 5))