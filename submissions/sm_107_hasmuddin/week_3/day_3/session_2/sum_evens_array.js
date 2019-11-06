var numArr = [1, 3, 2, 6, 8, 10];
var total = 0;
function sumEven() {
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
      total += numArr[i];
    }
  }
  console.log(total);
}
sumEven();
