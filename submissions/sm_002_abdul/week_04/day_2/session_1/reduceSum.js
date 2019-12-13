function reduceSum(arr,k){
    var output=arr.filter(function(val){
        return val>k;
    }).reduce(function(accumulator,currentVal){
        return accumulator+currentVal;
    },0)

    return output;
}

console.log(reduceSum([5,10,20,30,40,50],10));