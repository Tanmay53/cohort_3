// function avg_divisible(arr) {
//     var sum = 0
//     var arr = [2, 3, 6, 8, 9, 4]

//     while (i < arr.length) {
//         i--
//         sum += arr[i]

//     }
//     var average = sum / arr.length
//     console.log(average)
// }


var limit = 10;
var num = 5;

console.log("Average: ", avg_divisible(limit, num))


//function
function avg_divisible(limit, num){
    var sum = 0;
    var count = 0;
    var i = 0;
    while(i <= limit){

        if(i % num === 0){
           // console.log(i)
            sum = sum + i; // sum of numbers divisible by num
            count++;
        }
        i++;
    }console.log(count)
    avg = sum/count;
    return avg;
}console.log(avg_divisible(30,5))


