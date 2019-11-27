var test1 = [1, 2, 4, 10, 0, 0, 57, 69, 33, 0, 47], target1 = 0

function isEqual(arr, flag){
    var resultArr = arr.filter(function(ele){
            return ele != flag
    }).map(function(ele){
        return ele*ele
    })
    return resultArr
}

console.log(isEqual(test1, target1))
