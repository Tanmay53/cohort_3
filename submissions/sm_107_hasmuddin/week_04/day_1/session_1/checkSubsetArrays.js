//function to find subset
function checkSubset(subset, set) {
  obj = {};
  subsetSize = subset.length;
  setSize = set.length;
  for (i = 0; i < subsetSize || i < setSize; i++) {
    if (subsetSize > i) {
      obj[subset[i]] = subset[i];
    }
    if (setSize > i) {
      obj[set[i]] = set[i];
    }
  }
  objSize = Object.values(obj).length;
  //condition
  if (objSize > setSize) {
    console.log(`${subset} is not subset of ${set}`);
  } else {
    console.log(`${subset} is subset of ${set}`);
  }
}

//input
arr1 = [1, 2, 3];
arr2 = [4, 5, 6, 7, 8];

//output
checkSubset(arr1, arr2);
