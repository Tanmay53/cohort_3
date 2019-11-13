// function which takes an array of values and find total sum of integers in the array which are greater than the value k
function reduceSum(arr, num) {
  return arr
    .filter(function(value) {
      if (value > num) {
        return value;
      }
    })
    .reduce(function(acc, value) {
      return acc + value;
    });
}

// input
var arr = [4, 5, 8, 1, 0, -5, 6, 6];
var num = 4;

// output
console.log(reduceSum(arr, num));
