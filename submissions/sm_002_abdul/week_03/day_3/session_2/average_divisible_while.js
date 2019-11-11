function average_divisible_while(limit,given_num){
    var i=0
    var sum=0
    var count=0
    while (i<=limit){
        if (i%given_num==0){
            sum=sum+i
            count++
        }
        i++
    }
    average=sum/count
    console.log(average)
}

average_divisible_while(12,4)