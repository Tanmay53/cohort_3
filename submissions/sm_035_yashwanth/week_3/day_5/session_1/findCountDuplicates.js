var count = 0
var result =[]
function dup(arr,val){
for(i=0;i<arr.length;i++){
    if(arr[i]==val){
      count++
    }
}
 result.push(count)
 console.log(result)
}
dup([1,2,2,2,3,3],2)