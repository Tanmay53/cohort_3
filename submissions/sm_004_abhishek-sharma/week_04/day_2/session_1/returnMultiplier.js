var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target1 = 5

function Multiplier(arr, flag){
    var result = arr.map(function(ele){
        return ele*flag
    })
    return result
}

console.log(Multiplier(test1, target1))
