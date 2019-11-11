function arrayDifference(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        array1.splice(i, i + 1);
      }
    }
  }
  return array1;
}

console.log(arrayDifference([1, 3, 4, 5, 6], [1, 2, 3]));
