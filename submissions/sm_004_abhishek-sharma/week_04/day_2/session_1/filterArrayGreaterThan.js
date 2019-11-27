var test1 = [1, 2, 4, 10, 15, -95, 57, 69, 33, 0, 47], target1 = 33

function filterGreater(arr, limit){
    var resultArr = arr.filter(function(ele){
        return ele < limit
    })
    return resultArr
}

console.log(filterGreater(test1, target1))