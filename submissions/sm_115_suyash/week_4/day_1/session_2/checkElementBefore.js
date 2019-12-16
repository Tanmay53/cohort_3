var arr = [2, 3, 5, 6, 7, 3]
function checkElementBefore(arr) {
  var revArr = arr.map(function (val,index,arr) {
    if (arr[index - 1] > arr[val]) {
      return -1
    }
    return 1
  })
  return revArr;

}

console.log(checkElementBefore(arr))