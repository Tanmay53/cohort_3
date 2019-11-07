function avg_div_for(limit,divisor){

    var sum=0,element=0
    //check divisor is greater than zero
    if (divisor > 0){
        for(var i=1;i<=limit;i++){
            if(i%divisor==0){
                element++
                sum+=i
            }
        }
        console.log(sum/element)
    }
}

avg_div_for(10,2)