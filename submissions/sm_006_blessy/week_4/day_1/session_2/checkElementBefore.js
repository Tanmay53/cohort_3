function checkElementBefore(arr){
 
    arr1 = arr.map(function(index,arr1){

for(var i = 1;i<arr.length; i++){
    count = 0
if(arr[index-1] > arr[index]){
    count++
return -1

}
else
    return 1
}
})

return arr1
//console.log(arr1)

}
    console.log(checkElementBefore([-1,4,7,3,8,0,5]))