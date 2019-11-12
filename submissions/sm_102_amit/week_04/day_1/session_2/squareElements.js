// funciton which accepts an array of integers and return the square of each element
function squareElements(arr) {
  // array.map method
  arr = arr.map(function(value) {
    return Math.pow(value, 2);
  });
  return arr;
}

// input
var arr = [5, 2, 3, 7, 1, 0, 9];
// output
console.log(squareElements(arr));
