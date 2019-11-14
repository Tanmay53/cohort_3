function removeDuplicatesArrays (arr1){
var len=arr1.length
var opArray=[]
for (i=0;i<len;i++){
    if (opArray.indexOf(arr1[i])==-1){
        opArray.push(arr1[i])
        }   
    }
    console.log(opArray)
}
removeDuplicatesArrays([3,5,8,1,1,1,8,4,8])
