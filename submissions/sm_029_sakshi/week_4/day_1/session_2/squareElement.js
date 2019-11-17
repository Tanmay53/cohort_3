function squareElement(arr)
{
    newarr=arr.map(function(element)
    {
    return element*element
    });
    return newarr
}

console.log(squareElement([2,4,6,7]))