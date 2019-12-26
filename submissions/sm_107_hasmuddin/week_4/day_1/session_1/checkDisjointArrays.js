//function to find disjoint array or not!
function checkDisjoint(array1, array2) {
  obj = {};
  size1 = array1.length;
  size2 = array2.length;
  totalSize = Number(size1) + Number(size2);
  for (i = 0; i < size1 || i < size2; i++) {
    if (size1 > i) {
      obj[array1[i]] = array1[i];
    }
    if (size2 > i) {
      obj[array2[i]] = array2[i];
    }
  }
  objSize = Object.values(obj).length;
  //condition
  if (objSize < totalSize) {
    console.log("False");
  } else {
    console.log("True");
  }
}

//input
arr1 = [1, 4, 5];
arr2 = [5, 6, 7];

//output
checkDisjoint(arr1, arr2);
