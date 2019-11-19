arr=[1,2,3,4,5,6]
function multiply(arr,value)
{
    var newarr=arr.map(function(element)
    {
        return element*value
    })
    return newarr
}
console.log(multiply(arr,2))