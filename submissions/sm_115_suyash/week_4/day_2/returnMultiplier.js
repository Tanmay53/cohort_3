var arr = [2, 3, 5, 6, 7, 9]
var val = 4
function returnMuti(arr, val) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * val)
  }
  return newArr;
}

console.log(returnMuti(arr, val))