 arr = [1,2,3,4,5]
 arr.forEach(function(value,index,arr){
    arr[index] = value*value;
})
console.log(arr)
