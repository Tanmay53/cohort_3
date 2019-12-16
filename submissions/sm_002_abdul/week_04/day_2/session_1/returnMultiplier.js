function mulByTarget(arr,target){
    var output=arr.map(function(value){
        return value*target;
    })

    return output;
}

console.log(mulByTarget([3,6,1,2,3],3))