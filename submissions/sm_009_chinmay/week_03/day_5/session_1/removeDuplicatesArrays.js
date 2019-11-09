// Write a function to remove duplicates from an array
// Use arrays

function removeDuplicates(array) {

 for (var i = 0; i <= array.length - 1; i++) {
  // console.log(array[i])
  for (var j = 0; j <= array.length - 1; j++) {
   if ((array[i] === array[j] && i !== j)) {
    array.splice(j, 1)
   }
  }

 }
 console.log(array)
 return array
}


removeDuplicates(['a', 'r', 'r', 'a', 'y', 'a', 'r', 'r', 'a', 'y', 1, 1, 1, "z", "chin", "chin"])
//[ 'a', 'y', 'r', 1, 'z', 'chin' ]