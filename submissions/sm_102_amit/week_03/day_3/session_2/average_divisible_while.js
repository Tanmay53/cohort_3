// average divisible while loop
function avgDivisibleWhile(limit, input) {
  var sum = 0;
  var count = 0;
  var i = 0;
  while (i <= limit) {
    if (i % input == 0) {
      sum += i;
      count++;
    }
    i++;
  }
  var avg = sum / count;
  console.log(avg);
}

avgDivisibleWhile(10, 3);
