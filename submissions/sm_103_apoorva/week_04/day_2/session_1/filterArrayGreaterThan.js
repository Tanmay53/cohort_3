function filterArrayGreaterThan(arr1,num)
{
    return arr1.filter(function(element){
        if(element <= num)
        {
            return element
        }
    })
}
var arr1 = [1,3,2,5,7,9]
var num = 4
console.log(filterArrayGreaterThan(arr1,num))