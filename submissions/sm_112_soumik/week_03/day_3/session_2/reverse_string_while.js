var limit = 23
var n = 3
var x =0
i = 0
var avg = 0
var sum=0
while(i < limit){
    if(i % n == 0){
    sum = sum + i
    x= x+ 1
}
i++
}
avg = sum / x

console.log(x)
console.log(avg)