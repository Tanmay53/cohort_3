function checkSuperset(set, subset) {
  count = 0;
  for (var i = 0; i < set.length; i++) {
    for (var j = 0; j < subset.length; j++) {
      if (set[i] == subset[j]) {
        count += 1;
      }
    }
  }
  if (count == set.length) {
    return true;
  }
  return false;
}
// test 1
console.log(checkSuperset([1, 8, 9, 8, 9], [1, 8, 9]));
//true;

// test2
// console.log(checkSuperset( [1, 2, 3, 4, 5, 6], [1, 8, 3]));
//false;
