var limit = 23
var n = 3
var x =0 
var sum=0
for(i =0 ; i< limit ;i++){
    if(i % n == 0){
    sum = sum + i
    x =x + 1
}
}
console.log(x)
console.log(sum/x)