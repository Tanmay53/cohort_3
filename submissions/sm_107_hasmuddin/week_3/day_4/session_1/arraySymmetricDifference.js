//making a function for joining 2 arrays
function joinArray(array1, array2) {
  joinArr = [];
  for (var i = 0; i < array1.length; i++) {
    joinArr.push(array1[i]);
  }
  for (var j = 0; j < array2.length; j++) {
    joinArr.push(array2[j]);
  }
  return joinArr;
}

function symmetricDifference(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        //need to remove common element from both array;
      }
    }
  }
  return joinArray(array1, array2);
}

console.log(symmetricDifference([1, 2, 3, 4, 5], [1, 2, 3, 4]));
