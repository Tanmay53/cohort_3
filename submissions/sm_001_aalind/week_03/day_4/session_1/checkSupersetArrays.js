// Check if the first array is a superset of the second array
// Create a function that accepts the two arrays

function checkSupersetArrays(arr1, arr2) {
  var isSuperset = false;

  if (arr1.length < arr2.length) {
    return false;
  } else {
    for(var i = 0; i < arr2.length; i++) {
      for(var j = 0; j < arr1.length; j++) {
        if(arr2[i] == arr1[j]) {
          isSuperset = true;
        }
      }
      if(isSuperset == false) {
        return false;
      }
      isSuperset = false;
    }
  }

  return true;
}

console.log(checkSupersetArrays([1,2,3,1,1,4], [1,2,3,1,1,1]));