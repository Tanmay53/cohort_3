var limit = 1000;
var num = 7; 
var sum = 0;
var count = 0; 
var average;
function averageDivisibleWhile() {
    var i = 1
    while(i <= limit){
        if(i % num == 0){
            sum += i;
            count++;
        }
        i++
    }
    average = sum / count
    console.log(average)
}

averageDivisibleWhile()