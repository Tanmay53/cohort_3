function checkDisjoint(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(checkDisjoint([1, 3, 5], [2, 4, 6]));
