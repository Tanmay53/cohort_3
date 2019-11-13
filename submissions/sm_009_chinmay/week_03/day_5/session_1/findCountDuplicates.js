// Write a function which accepts an array as argument and a target value
// Return total count of the target value in the array
// Use objects

arr = [1,2,1,2,2,2,3]
// arr = [1,2,1,2,2,2,3,"a", "a", "Chin", "Chin",-1,-1]

function findCountDuplicates(arr, target){
 obj = {}
 size = arr.length
 duplicateCnt = 0

 for(var i=0; i<size; i++){
  if(i<size){
   obj[arr[i]] = arr[i]
  }
  if(obj[arr[i]] == target){
   duplicateCnt += 1
   // console.log(duplicateCnt)
  }
 }
 return duplicateCnt
}

console.log(findCountDuplicates(arr, 2))