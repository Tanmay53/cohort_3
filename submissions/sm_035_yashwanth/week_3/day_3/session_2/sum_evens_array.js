var numbers=new Array(1,2,3,4,5,6)
sum=0
for(i=0;i<=numbers.length;i++){
    if(i%2==0){
        sum += i
    }
}
console.log(sum)