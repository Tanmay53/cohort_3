//Function to find sum of elements of array which are greate than a value k.
function reduceSum(arr, k) {
    var sum = arr.filter(function(element) {
        return element > k;
    }).reduce(function(acc, element) {
        return acc+element;
    }, 0);
    return sum;
}


/* Test Case :- 
   I/P :- [10,20,5,15,20,17], 10   O/P :- 72
*/