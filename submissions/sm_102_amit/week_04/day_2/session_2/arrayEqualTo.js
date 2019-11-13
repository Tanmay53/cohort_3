// function which accepts an array of integers and a target value remove all values in the array which are equal to the target value and square the remaining
function arrayEqualTo(arr, num) {
  return arr
    .filter(function(value) {
      if (value != num) {
        return value;
      }
    })
    .map(function(value) {
      return Math.pow(value, 2);
    });
}

// input
var arr = [4, 5, 8, 1, 4, 6, 6, 4];
var num = 4;

// output
console.log(arrayEqualTo(arr, num));
