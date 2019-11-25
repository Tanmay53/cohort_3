function checkDisjoint(array1, array2) {
  union = {};

  array1.forEach(function(e) {
    union[e] = e;
  });

  array2.forEach(function(e) {
    union[e] = e;
  });

//   console.log(union);
  elem = Object.keys(union);

  if (elem.length < array1.length + array2.length) {
      return "Not disjoint arrays"
  }
  else{
      return "Disjoint arrays"
  }
}

console.log(checkDisjoint([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(checkDisjoint([1, 2, 3, 4], [5, 6, 7, 1]));
