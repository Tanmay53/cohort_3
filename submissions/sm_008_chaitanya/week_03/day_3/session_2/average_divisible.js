function average_divisible(limit,number){
var sum=0;
var avg=0;
var count=0;
for(i=0;i<=limit;i++){
    if(limit%number==0){
        sum+=i;
        count+=1;
    }
    avg=sum/count;
}
console.log(avg)
}
average_divisible(40,4)