//object which have an array;
arrayObject = {
  arr: [1, 2, 6, 7, 2, 6, 9]
};

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
  //loop for when array have 'duplicate' then it will be exclude that element.
  //and rest element will push in new array;
  for (k = 0; k < arr.length; k++) {
    if (arr[k] != "duplicate") {
      newArr.push(arr[k]);
    }
  }
  console.log(newArr);
}

removeDuplicate(arrayObject.arr);
