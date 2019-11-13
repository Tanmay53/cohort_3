function reduceSum(arr, k) {
    var res = arr.filter(function(element){
        return element > k
    }).reduce(function(acc, element){
        return acc + element     
    },0)

    return res
}


var arr = [1,2,3,4,5]
var k = 5
console.log(reduceSum(arr, k))

/*
------------------------------------------------- Test Cases ---------------------------------------------------------
Input                                                                             Output
[1,2,3,4,5] , 0                                                                   15

[1,2,3,4,5] , 1                                                                   14

[1,2,3,4,5] , 2                                                                   12


[1,2,3,4,5] , 5                                                                    0


*/
