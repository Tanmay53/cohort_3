function checkSubset(subset, set) {
  count = 0;
  for (var i = 0; i < subset.length; i++) {
    for (var j = 0; j < set.length; j++) {
      if (subset[i] == set[j]) {
        count += 1;
      }
    }
  }
  if (count == subset.length) {
    return true;
  }
  return false;
}
// test 1
console.log(checkSubset([1, 8, 9], [1, 2, 3, 4, 5, 6]));
//false;

// test2
console.log(checkSubset([1, 2, 3], [1, 2, 3, 4, 5, 6]));
//true;
