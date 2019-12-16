var arr = [4, 5, 8, 1, 0, -5, 6, 6];
var val = 4;
function reduceSum(arr, val) {
  var newArr = [];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (val < arr[i]) {
      sum += arr[i]
    }
  }
  return sum
}

console.log(reduceSum(arr, val))