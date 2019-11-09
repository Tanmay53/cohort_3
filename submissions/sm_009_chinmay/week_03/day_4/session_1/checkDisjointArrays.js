// Check if two given arrays are disjoint or not
// Create a function that accepts the two arrays

function checkDisjoinArrays(array1, array2) {

 var disjointFlag = 0
 var jointFlag =0
 
 for (var i = 0; i <= array1.length - 1; i++) {
  for (var j = 0; j <= array2.length - 1; j++) {

   if (array1[i] == array2[j]) {
    jointFlag += 1
    console.log(jointFlag)
   }
   else{ 
    disjointFlag += 1
   }
 }
}
 if(jointFlag===0 && disjointFlag!==0)
  console.log("Disjoint Arrays")
 
 else
  console.log("Not an disjoint array")
}



// checkDisjoinArrays([1, 2, 3, 3, 4], [5,10,7,-1,3, 3])
checkDisjoinArrays([1,2,3],[3,2,1])