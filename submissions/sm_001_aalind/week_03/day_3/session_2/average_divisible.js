
function average_divisible(limit, num) {
  var sum = 0;
  var count = 0;
  for(i=1; i<=limit; i++){
    if(i % num == 0) {
      sum = sum + i;
      count = count + 1;
    }
  }
  return (sum/count);
}

console.log(average_divisible(15, 5));
