function sum_evens(arr){
    var sum = 0

    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            sum = sum + arr[i]
        }
    }

    return sum
    
}

// code starts here
arr = [11,22,33,44,55,16,27,845,94,10]
console.log("Sum : ", sum_evens(arr))


/*
---------Test Cases----------------


Input                             Output
[1,2,3,4,5,6,7,8,9,10]              30
[11,22,33,44,55,16,27,845,94,10]    186
*/