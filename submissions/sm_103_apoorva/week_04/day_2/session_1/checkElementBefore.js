function checkElementBefore(arr)
{
    return arr.reduce(function(previousValue,currentValue){
        return typeof(currentValue) == "string" ? previousValue : previousValue + currentValue
    },0)
}
var arr1 =["table",500,"chair",200,"Mug",50]
console.log(checkElementBefore(arr1))