var number = 5; // for checking divisibility
var limit = 10;
var sum = 0;
var count = 0;
var i = 0;
while (i <= limit) {

    //checking divisibility 
    while (i % number == 0) {
        count++;
        sum = sum + i;
        console.log("Numbers", i)
        break;
    }
    i++;
}
console.log(sum);

//calculating average
var average = sum / count;

console.log("Average for the numbers divisible by " + number + " is:", average);


//TEST CASE
// input:
// number = 5;
// limit = 19;
// output:
// Average for the numbers divisible by 5 is: 5