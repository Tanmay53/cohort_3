// Check if the first array is a subset of the second array
// Create a function that accepts the two arrays

function checkSubsetArrays(array1, array2) {
 var subsetFlag = 0

 for (var i = 0; i <= array1.length - 1; i++) {
  for (var j = 0; j <= array2.length - 1; j++) {

   if (array1[i] === array2[j]) {
    subsetFlag += 1
   }
 }
}

 if(subsetFlag === array1.length){
  console.log("First Array is the subset of Second Array")
 }
 else{
  console.log("First Array is NOT the subset of Second Array")
 }
 
}

checkSubsetArrays([1,4,3,-1, "a"],[3,2,1,5,6,4,-1,"a"])