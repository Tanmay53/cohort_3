function sum_evens_array(arraylimit){
var sum=0;
for (i=0;i<=arraylimit;i++){
    if(i%2==0){
    sum+=i;
    }
}
console.log(sum)
}
sum_evens_array(6)