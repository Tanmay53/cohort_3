//function for array Difference //
function arrayDifference(array1, array2) {
  diff = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        array1[i] = "duplicate";
      }
      //array1 will be return like [duplicate, duplicate, 3]
      //removed duplicate from array1 and result will hit on console.
    }
    if (array1[i] != "duplicate") {
      diff.push(array1[i]);
    }
  }
  return diff;
}

console.log(arrayDifference([1, 2, 3, 5, 6], [1, 3]));
