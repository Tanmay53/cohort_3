var numbers = [1, 2, 3, 4, 5];
var len = numbers.length;
sum = 0;
var i = 0;
while (i < len) {
  sum += numbers[i];
  i++;
}
average = sum / len;
console.log(average);
