function unionArray(array1, array2) {
  union = {};

  array1.forEach(function(e) {
    union[e] = e;
  });
  array2.forEach(function(e) {
    union[e] = e;
  });

  return Object.keys(union);
}

console.log(unionArray([1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(
  unionArray(
    [1, 2, 3, 4, 1, 2, 4, 6, 8, 9],
    [1, 2, 3, 4, 5, 0, 7, 4, 1, 3, 5, 6, 9]
  )
);
console.log(unionArray([1, 2, 3, 4], [5, 6, 7, 8]));
