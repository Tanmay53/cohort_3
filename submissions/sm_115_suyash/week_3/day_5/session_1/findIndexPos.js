var num = 2
var arr = [23, 42, 12, 4, 2, 5, 2]
function findIndex(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (num == arr[i])
      return i;
      // "Index Of Number is: ",i
  }
    
  return -1;
}
console.log(findIndex(arr, num));