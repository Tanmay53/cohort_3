var arr=[2,3,4,5,6,1,1,2,3,7,8,9,10]

function filterArrayGreaterThan(arr,target)
{
    var newArray=arr.filter(function(element,target){
    return element>5
    })
    return newArray
}
console.log(filterArrayGreaterThan(arr,5))