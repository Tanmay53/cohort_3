// Check if two given arrays are disjoint or not
// Create a function that accepts the two arrays

function checkDisjointArrays(arr1, arr2) {
  var areDisjoint = true;

  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      if(arr1[i] == arr2[j]) {
        areDisjoint = false;
        break;
      }
    }
    if(!areDisjoint) {
      break;
    }
  }

  return areDisjoint;
}

console.log(checkDisjointArrays([1,2,3,12,12], [5,7,130,12]));