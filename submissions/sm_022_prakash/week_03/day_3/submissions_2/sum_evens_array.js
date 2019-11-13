
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
// console.log(arr.length)
//function to incrementally check the number is even and sum if true
function sumEven(arr){

for (i = 0; i < arr.length; i++) {
        // var sum = o;
        if(Number(arr[i])%2===0){
            sum= sum + arr[i]
        }
        
    }
    console.log("The sum of the Even numbers is:-" + sum)
}
//invoking function
sumEven(arr)