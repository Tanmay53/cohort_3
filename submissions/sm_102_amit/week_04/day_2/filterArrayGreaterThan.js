// function which accepts an array of integers and a target value remove all values in the array which are equal to the target value and square the remaining
function filterArrayGreaterThan(arr, num) {
  return arr.filter(function(value) {
    if (value >= num) {
      return value;
    }
  });
}

// input
var arr = [4, 5, 8, 1, 4, 6, 2, 4];
var num = 4;

// output
console.log(filterArrayGreaterThan(arr, num));
