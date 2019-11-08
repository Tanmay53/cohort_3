// Create an array with the intersection of two given arrays
// Create a function that accepts the two arrays

function intersectionArrays(array1, array2){
 var commonFlag = 0

 arrayIntersection = []
 for (var i = 0; i <= array1.length - 1; i++) {
  for (var j = 0; j <= array2.length - 1; j++) {

   if (array1[i] === array2[j]) {
    commonFlag += 1
    arrayIntersection.push(array1[i])
   }
 }
}
console.log(arrayIntersection)
}

intersectionArrays([1,2,3, "a"],[1,4,"a",5,6,2])
// intersectionArrays([],[1,4,"a",6,2])