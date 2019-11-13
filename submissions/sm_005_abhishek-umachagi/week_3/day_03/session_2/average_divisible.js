var limit = 18
var divisor = 2
var avg = 0
var sum = 0
var count = 0
for (i=1; i <= limit; i++){
    if (i%divisor==0){
    sum+=i
    count++
  }
}
avg=(sum/count)
console.log(avg)