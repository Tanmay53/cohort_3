// average divisible for loop
function avgDivisible(limit, input) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i <= limit; i++) {
    if (i % input == 0) {
      sum += i;
      count++;
    }
  }
  var avg = sum / count;
  console.log(avg);
}

avgDivisible(20, 3);
