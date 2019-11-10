input=[2,46,5,8,11,73,10,9,6]
sumOfEven=0
for (i=0;i<input.length;i++){
    if (input[i]%2==0){
        sumOfEven=sumOfEven + input[i]
    }
}
console.log("Sum of even numbers in the given array is",sumOfEven)