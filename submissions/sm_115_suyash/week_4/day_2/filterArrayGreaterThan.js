var arr = [2,9,5,6,7]
var val = 5;

function filterArr(arr, val) {
  arr.sort(function (a, b) {
    return a - b;
  })
  var newArr = [];
  var size = arr.length;
  for (var i = 0; i < size; i++) {
    if (val > arr[i]) 
      newArr.push(arr[i])
    }
  return newArr
}

console.log(filterArr(arr, val))