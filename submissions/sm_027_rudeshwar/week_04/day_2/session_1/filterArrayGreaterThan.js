var arr=[4,5,52,61,83,93,28,200,800]
var target=93
function filterArrayGreaterThan(arr,target)
{
    newArr = arr.filter(function(element, index){
        return element>200
    })
}
filterArrayGreaterThan(arr,target)
console.log(newArr)

