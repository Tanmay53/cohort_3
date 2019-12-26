//concenating two array through joinArray function
function joinArray(array1, array2) {
  joinArr = [];
  for (i = 0; i < array1.length; i++) {
    joinArr.push(array1[i]);
  }
  for (j = 0; j < array2.length; j++) {
    joinArr.push(array2[j]);
  }
  return joinArr;
}
//making a function to find union of two array;
function unionArray(array1, array2) {
  union = [];
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        array1[i] = "duplicate"; //common element will become duplicate. it will be easier to remove further.
      }
    }
  }
  //
  combineArray = joinArray(array1, array2);
  for (k = 0; k < combineArray.length; k++) {
    if (combineArray[k] != "duplicate") {
      union.push(combineArray[k]);
    }
  }
  console.log(union);
}

//revoking union function
unionArray([1, 2, 3, 4, 5, 6], [4, 5, 6]);
