function multiply(arr,target){
    var multiplied=arr.map(function(element){
        return element*target
    })
    return multiplied
}

var arr=[1,2,3,4]
console.log(multiply(arr,2))