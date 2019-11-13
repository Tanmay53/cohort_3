function reduceSum(array,target){
    var newArray = array.filter(function(element){
        return element > target
    }).reduce(function(acc,cur){
        return acc+cur
    })

    console.log(newArray)
}

reduceSum([9,3,5,4,6,2,7,2,8,1,9,7,8,5,1],5)