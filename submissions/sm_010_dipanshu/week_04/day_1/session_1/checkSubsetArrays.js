function checkSubset(array1, array2) {
  subset = {};

  array1.forEach(function(e) {
    subset[e] = e;
  });
  //   console.log(subset);

  array2.forEach(function(e) {
    subset[e] = e;
  });

  //   console.log(subset);

  union = Object.keys(subset);

  if (union.length == array1.length) {
    return "Array 2 is a subset of Array 1";
  } else {
    return "Array 2 is not a subset of Array 1";
  }
}

console.log(checkSubset([1, 2, 3, 4], [5, 6]));
console.log(checkSubset([1, 2, 3, 4], [1, 2]));
console.log(checkSubset([1, 2, 3, 4], [1, 6]));
console.log(checkSubset([1, 2, 3, 4], [1, 2, 3, 4]));
