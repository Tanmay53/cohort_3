// Check if the first array is a subset of the second array
// Create a function that accepts the two arrays

function checkSubsetArrays(arr1, arr2) {
  var isSubset = false;

  if (arr1.length > arr2.length) {
    return false;
  } else {
    for(var i = 0; i < arr1.length; i++) {
      for(var j = 0; j < arr2.length; j++) {
        if(arr1[i] == arr2[j]) {
          isSubset = true;
        }
      }
      if(isSubset == false) {
        return false;
      }
      isSubset = false;
    }
  }

  return true;
}

console.log(checkSubsetArrays([1,2,3], [1,2,3]));