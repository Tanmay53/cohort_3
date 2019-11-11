function averagediv(limit,multiple){
    var sum=0
    var count=0
    for(i=1;i<=limit;i++){
        if (i%multiple==0) {
            sum=sum+i
            count=count+1
            
        }
    }
    return sum/count
}

console.log(averagediv(60,6))