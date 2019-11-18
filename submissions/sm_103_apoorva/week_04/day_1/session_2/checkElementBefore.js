var arr=[2,5,7,9,3,6,0]
function checkElementBefore(arr)
{
    x= arr.map(function(element,index)
    {
        if(element >index-1)
            return -1
        else
            return 1
    })
    return x
}
console.log(checkElementBefore(arr))