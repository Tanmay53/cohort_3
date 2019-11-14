//function to find superset ;
function checkSuperset(superset, set) {
  obj = {};
  supersetSize = superset.length;
  setSize = set.length;
  for (i = 0; i < supersetSize || i < setSize; i++) {
    if (supersetSize > i) {
      obj[superset[i]] = superset[i];
    }
    if (setSize > i) {
      obj[set[i]] = set[i];
    }
  }
  objSize = Object.values(obj).length;
  //condition
  if (objSize > supersetSize) {
    console.log(`${superset} is not superset of ${set}`);
  } else {
    console.log(`${superset} is superset of ${set}`);
  }
}

//input
superSet = [1, 2, 3, 4, 5];
subset = [4, 2];

//output
checkSuperset(superSet, subset);
