function returnMultiplier(arr,k)
{
    return arr.map(function(value){
        return value*k
    })
}
var arr1 = [1,3,2,4,5,7,9]
var num = 7
console.log(returnMultiplier(arr1,num))