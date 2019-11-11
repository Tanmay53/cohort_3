var limit = 50, num = 7, sum = 0, count = 0, average
function averageDivisible() {
    for(var i =1; i <= limit; i++){
        if(i % num == 0){
            sum += i;
            count++;
        }
    }
    average = sum / count
    console.log("Average of all numbers divisible by " + num + " till " + limit + " is = " + average)
}

averageDivisible()