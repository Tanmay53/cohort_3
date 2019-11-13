//invoking function
console.log("sum: ", reduce_sum([10, 4, 2, 6, 5, 7, 12, 30], 7))


//function reduce sum
function reduce_sum(arr, k) {
    var sum = arr.filter(function(element) {
        return element > k;
    }).reduce(function(sum, ele) {
        return sum + ele;
    }, 0);

    return sum;
}


//input
//reduce_sum([10, 4, 2, 6, 5, 7, 12, 30], 7)
//output : sum:  52