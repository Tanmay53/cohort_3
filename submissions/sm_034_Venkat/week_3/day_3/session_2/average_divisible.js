function avg(limit, divisor) {
  var limit = limit || 12
  var divisor = divisor || 4
  var count = 0
  var sum = 0
  var avg = 0
  for (i = 1; i <= limit; i++) {
    if (i % divisor == 0) {
      sum += i
      count += 1
    }
  }
  avg = sum / count
  // console.log(sum)
  // console.log(count)
  console.log(avg)
}
avg(29, 3)