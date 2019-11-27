var test1 = [1, 2, 14, 10, 100, 5, 69, 33, 0, 47], target1 = 25
var test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target2 = 5

function reduceSum(arr, flag){
    var resultArr = arr.filter(function(ele){
            return ele > flag
    }).reduce(function(a,c){
        return a+c
    })
    return resultArr
}

console.log(reduceSum(test1, target1))
console.log(reduceSum(test2, target2))
