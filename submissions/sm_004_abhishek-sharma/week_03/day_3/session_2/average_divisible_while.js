var limit = 100, num = 10, sum = 0, count = 0, average
function averageDivisible() {
    var i = 1
    while(i <= limit){
        if(i % num == 0){
            sum += i;
            count++;
        }
        i++
    }
    average = sum / count
    console.log("Average of all numbers divisible by " + num + " till " + limit + " is = " + average)
}

averageDivisible()