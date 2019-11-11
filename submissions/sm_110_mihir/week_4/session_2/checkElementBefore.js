var sorted=[0,1,2,3,4]
var result=sorted.map(function(element, index,arr){
    if(arr[index-1]> element) 
        return -1
    else
        return 1
})

console.log(result)