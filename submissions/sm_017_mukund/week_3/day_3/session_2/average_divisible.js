var limit=15    // variable to define the given limit
var num=4     // variable given by user to find all the numbers divisible by it within a given limit
var sum=0      // variable to store the sum 
var a=0        // varible to store the total numbers divisible by given number within the limit

// function to calculate the average of numbers divisible by given number within the given limit

function average_divisible(x,y){
    for(i=y;i<=x;i+=y){
        sum+=i
        a++
        
    }
    average=(sum/a)
    console.log('Sum : ',sum)
    console.log('Total num : ',a)
    console.log('Average : ',average)
    
}

average_divisible(limit,num)        // function call