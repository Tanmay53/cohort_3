function averageOfNo(N, m) {
  var count = 0;
  var sum = 0;
  for (N ; N >= 0; N - 1) {
    if (N % m == 0) {
      sum = sum + N;
      count++;
    }
    else {
      sum = sum + 0;
    }
    N = N - 1;
  }
  return sum / count;
}
console.log(averageOfNo(10, 3));