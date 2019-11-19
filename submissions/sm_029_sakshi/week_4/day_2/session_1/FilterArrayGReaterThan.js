function filterarray(arr,target)
{
    var new_arr=arr.filter(function(element){
        return element < target
    })

return new_arr
}


var arr = [1,2,3,4,5,6,7]
console.log(filterarray(arr, 4))