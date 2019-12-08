function evenSumArr(arr) {
  var evenSum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    }
  }
  return evenSum;
}
var arr = [2,6,4,2,3,7,4]
console.log(evenSumArr(arr))