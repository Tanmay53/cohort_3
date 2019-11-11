var limit=15    // variable to define the given limit
var num=5       // variable given by user to find all the numbers divisible by it within a given limit
var sum=0       // variable to store the sum
var a=0         // varible to store the total numbers divisible by given number within the limit

function average_divisible_while(x,y){
    var i=y
    while(i<=x){
        sum+=i
        i+=y
        a++
    }
    average=sum/a
    console.log('Sum : ',sum)
    console.log('Total num : ',a)
    console.log('Average : ',average)
}

average_divisible_while(limit,num)      //function call