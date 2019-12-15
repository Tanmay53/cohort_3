var arr = [2, 4, 5, 6, 7, 7, 3];
var val = 7;

function arrEql(arr, val) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (val != arr[i]) {
      newArr.push(arr[i] * arr[i])
    }
  }
  return newArr
}

console.log(arrEql(arr, val))