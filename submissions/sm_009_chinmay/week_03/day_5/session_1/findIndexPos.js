// Write a function to find the position first occurence of a given value inside an array
// Incase it doesnt exist, return -1

function findIndexPosition(array, value) {
 var cnt = 0
 var position =0
 for(var i=0; i<= array.length-1; i++){
  if(array[i] == value && cnt ===0){
   position = i
   cnt += 1
  }
 }
 if(cnt==0){
  return -1
 }
 console.log(position)
 return position
}

findIndexPosition(["a","a",1,2,22,3,4,3,2,11,1,2,2], "2") //3