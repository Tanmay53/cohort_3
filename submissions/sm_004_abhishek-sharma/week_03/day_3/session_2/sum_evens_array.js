var arr = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10], sum = 0
function sumEven() {
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] % 2 == 0){
            sum += arr[i]
        }
    }
    console.log("Sum of even numbers in the array is = ", sum)  
}

sumEven()