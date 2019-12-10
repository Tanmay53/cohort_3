function arrayEqualTo(arr1,num)
{
    var obj = arr1.filter(function(value)
    {
        if(parseInt(value) != parseInt(num))
        {
            return value 
        }
    })
    obj = obj.map(function(element)
    {
        return element**2
    })
    return obj
}
var arr1 = [1,3,2,4,5,7,9]
var num = 7
console.log(arrayEqualTo(arr1,num))