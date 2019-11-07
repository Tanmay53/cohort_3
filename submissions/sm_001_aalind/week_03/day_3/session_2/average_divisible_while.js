
function average_divisible_while(limit, num) {
  var sum = 0;
  var count = 0;
  var i = 1;

  while(i <= limit) {
    if(i % num == 0) {
      sum = sum + i;
      count = count + 1;
    }
    i = i + 1;
  }

  return (sum/count);
}

console.log(average_divisible_while(20, 3));