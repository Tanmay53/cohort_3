//function to return average of numbers divisible by given number falling in range from 0 to limit. It takes 2 arguments - limit and number itself
function averageDivisible(limit, num){

    //special case - if the range is 0, so is the average
    if(limit == 0){
        return 0
    }
    else if(num == 0){
        return 'Number cannot be 0. Try a different number' //checking to see the infinity case
    }
    else{

        //temporary variables for calculating average
        var total = 0
        var sum = 0

        //initialising the loop counter
        var i = 0

        //while loop for calculating average
        while(i <= limit){
            if(i % num == 0){
                sum += i
                total++
            }    
            i++     //incrementing the loop counter
        }

        //return the average
        return (sum/total)
    }
}


var average = averageDivisible(50,5)    //invoking the function with limit as 50 and the number as 5
console.log(average)