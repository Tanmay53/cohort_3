//sorting array function;
function sortArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        dummy = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = dummy;
      }
    }
  }
  return arr;
}
//remove duplicate function
function removeDuplicate(arr) {
  newArr = []; //this array will store newArray which does not contain duplicate;
  arr = sortArr(arr);
  for (m = 0; m < arr.length; m++) {
    if (arr[m] == arr[m + 1]) {
      arr[m] = "duplicate";
    }
  }
  for (k = 0; k < arr.length; k++) {
    if (arr[k] != "duplicate") {
      newArr.push(arr[k]);
    }
  }
  return newArr;
}

console.log(removeDuplicate([1, 2, 3, 3, 5, 5, 5, 5, 5, 8, 1, 2]));
