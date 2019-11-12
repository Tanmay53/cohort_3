// funciton which accepts an array of integers returns output based on operation
function checkElementBefore(arr) {
  // array.map method
  var arr = arr.map(function(value, index) {
    if (value < arr[index - 1]) {
      return -1;
    } else {
      return 1;
    }
  });
  return arr;
}

// input
var arr = [5, 2, 3, 7, 1, 0, 9];
// output
console.log(checkElementBefore(arr));
