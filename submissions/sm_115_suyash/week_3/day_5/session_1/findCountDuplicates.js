function findCount(Countduplicates) {
  var count = 0;
  for (i = 0; i < Countduplicates.arr.length; i++) {
    if (Countduplicates.num == Countduplicates.arr[i]) {
        count++;
      }
  }
  return count;
}

Countduplicates = {
  arr : [3, 5, 23, 11, 5, 3, 12, 3, 5],
  num : 5
};
console.log(findCount(Countduplicates));
