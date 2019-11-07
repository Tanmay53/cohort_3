var number = 5; //number with which we will check divisibility
var limit = 30; //limit

function checkAverage_Divisible(limit, number) {
    var temp = [];
    var average;
    var count = 0;
    var sum = 0;
    for (var i = 0; i <= limit; i++) {
        if (i % number == 0) {
            temp.push(i);
        }
    }
    console.log(temp)
    for (var i = 0; i < temp.length; i++) {
        count++;
        sum = sum + temp[i];
        average = sum / count;
    }
    return average;
}

console.log("Average of the numbers divisible by 9:", checkAverage_Divisible(limit, number));

//TEST CASE
// input:
// number = 5;
// limit = 30;
// output:
// [ 0, 5, 10, 15, 20, 25, 30 ]
// Average of the numbers divisible by 9: 15