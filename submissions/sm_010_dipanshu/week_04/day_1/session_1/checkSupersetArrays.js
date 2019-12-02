function checkSubset(array1, array2) {
  superset = {};

  array1.forEach(function(e) {
    superset[e] = e;
  });
  console.log(superset);

  array2.forEach(function(e) {
    superset[e] = e;
  });

  console.log(superset);

  union = Object.keys(superset);

  if (union.length == array1.length) {
    return "Array 1 is a superset of Array 2";
  } else {
    return "Array 1 is not a superset of Array 2";
  }
}

console.log(checkSubset([1, 2, 3, 4], [5, 6]));
console.log(checkSubset([1, 2, 3, 4], [1, 2]));
console.log(checkSubset([1, 2, 3, 4], [1, 6]));
console.log(checkSubset([1, 2, 3, 4], [1, 2, 3, 4]));
