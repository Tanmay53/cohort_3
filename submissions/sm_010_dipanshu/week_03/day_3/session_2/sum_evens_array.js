function getEvenSum(inputArray){

    var sum = 0

    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i] % 2 == 0){
            sum += inputArray[i]
        }
    }

    return sum

}

var evenSum = getEvenSum([1,-2,3,4,5,6,7,8,9,-10])
console.log(evenSum)