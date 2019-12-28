var numbers = [1, 2, 3, 4];
var len = numbers.length;
sum = 0;
function averageNumb() {
  for (var i = 0; i < len; i++) {
    sum += numbers[i];
  }
  average = sum / len;
  console.log(average);
}
averageNumb();
