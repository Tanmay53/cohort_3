//function which accepts an array and an integer k
//Find the total sum of integers in the array using reduce which are greater than the value k

function reduceSum(array, k) {

    var result = array
        .filter(element => element > k)
        .reduce((total, a) => total + a, 0);

    return result;
}




console.log(reduceSum([1, 2, 3, 4, 5, 6, 7, 8], 6));

console.log(reduceSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));