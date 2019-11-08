function avgDivisible (limit, div) {
  var sum = 0;
  var count = 0;
  var avg = 0;

  for (var i = 1; i <= limit; i++) {
    if(i % div == 0){
      sum += i; 
      count ++;
    }
  }
  avg = sum / count ; 
  return avg ;
}

console.log(avgDivisible(55, 7));