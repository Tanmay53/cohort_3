function reduceSum(arr,k)
{
    var obj = arr.filter(function(element){
        if(element > num)
        {
            return element
        }
    })

    var sum = obj.reduce(function(previousValue,currentValue){
            return previousValue+currentValue
    })


    return sum
}
var arr1 = [1,3,2,4,5,7,9]
var num = 4
console.log(reduceSum(arr1,num))