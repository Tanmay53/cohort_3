function avg_div(limit,divisor){
    var num=1,  element=[],index=0, sum=0
    //check divisor is greater than zero
    if (divisor > 0){
        while(num<=limit){
            // if number is divisible, add it to the array.
            if(num%divisor==0){
                element[index++]=num
            }
            num++
        }
        console.log('divisible elements:',element)
        // traversing array for sum of elements
        index=0
        while(index<element.length){
            sum+=element[index]
            index++
        }
        console.log('Average=',(sum/element.length))
    }
}

avg_div(10,2)
