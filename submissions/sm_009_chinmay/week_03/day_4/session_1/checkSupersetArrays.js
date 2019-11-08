// Check if the first array is a superset of the second array
// Create a function that accepts the two arrays

function checkSupersetArrays(array1, array2) {
 var supersetFlag = 0

 for (var i = 0; i <= array1.length - 1; i++) {
  for (var j = 0; j <= array2.length - 1; j++) {

   if (array1[i] === array2[j]) {
    supersetFlag += 1
   }
 }
}

 if(supersetFlag === array2.length){
  console.log("First Array is the Superset of Second Array")
 }
 else{
  console.log("First Array is NOT the Superset of Second Array")
 }
 
}

checkSupersetArrays([1,2,3,4], [1,"a",3])