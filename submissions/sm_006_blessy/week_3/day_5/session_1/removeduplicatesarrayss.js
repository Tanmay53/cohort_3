 arr = [1,2,3,4,4,5,5,6,7,7,8,8,9,4,4,2] 
function removeduplicatearraysObject(arr)
{
res = {}
for(var i=0; i<arr.length; i++){
    res[ arr[i] ] = arr[i]
}
return Object.values(res)
}  
console.log(removeduplicatearraysObject(arr))
 


    
    