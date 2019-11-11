function average_divisible(limit,number_given){
    sum=0
    count=0
    for (i=0; i<=limit;i++){
        if (i%number_given==0){
            sum=sum+i
            count++
        }
    }
    average=sum/count
    console.log(average)

}

average_divisible(12,4)
