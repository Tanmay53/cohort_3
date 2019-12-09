var limit =10
var sum =0
var counter=0
var avg=0
var Number=2
for(i=0;i<=limit;i++){
    if(i % Number ==0){
        sum += i
        counter++
        avg=sum/Number
    
}
}
console.log(counter)
console.log(avg)