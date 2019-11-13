// Write a function to remove duplicates from an array
// Use Objects

arr = [1,2,1,2,2,2,3,"a", "a", "Chin", "Chin",-1,-1]

function removeDuplicatesUsingObj(arr) {
 obj = {}
 size = arr.length

 for(var i=0; i<size; i++){
  if(i<size){
   obj[arr[i]] = arr[i]
  }
 }
 console.log(obj)
 return Object.values(obj)
}

console.log(removeDuplicatesUsingObj(arr))