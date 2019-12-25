function interSection(array1, array2) {
  interArr = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        interArr.push(array1[i]);
      }
    }
  }
  return interArr;
}

console.log(interSection([1, 2, 4, 8, 9], [1, 3, 4]));
