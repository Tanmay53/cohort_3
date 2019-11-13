var arr=[2,5,7,9,3,6,0]
function squareElements(arr)
{
    x= arr.map(function(element)
    {
        return element*element
    })
    return x
        
}
console.log(squareElements(arr))