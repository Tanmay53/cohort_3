// Write a function to find all the positions of a given value inside an array
// Return the output in an array format
// If it doesnt exist return -1


function findIndexOccurance(array, value) {
 var cnt = 0
 var positionArray = []
 for(var i=0; i<= array.length-1; i++){
  if(array[i] === value){
   positionArray.push(i)
  }
  else if(array[i]!== value){
   cnt += 1
  }
 }
 if(cnt === array.length){
  console.log("Doesnt exist")
  return -1
 }
 console.log(positionArray)
 return positionArray

}

findIndexOccurance(['a','r','r','a','y', 2, -1, -1, -1], -1) //[ 6, 7, 8 ]