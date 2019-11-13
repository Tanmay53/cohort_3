var num = 1
var arr = [2, 23, 42, 2, 12, 4, 2, 5, 2]
function findIndex(arr, num) {
  occArr = [-1];
  j = 0;
  for (i = 0; i < arr.length; i++) {
    // "Index Of Number is: i"
    if (num === arr[i]) {
      occArr[j] = i;
      j++;
    }
  }
  return occArr;

}
console.log(findIndex(arr, num));