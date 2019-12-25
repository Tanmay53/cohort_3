//making a function which will help to find union b/w two arrays
function unionArray(array1, array2) {
  union = {};
  size1 = array1.length;
  size2 = array2.length;
  for (i = 0; i < size1 || i < size2; i++) {
    if (size1 > i) {
      union[array1[i]] = array1[i];
    }
    if (size2 > i) {
      union[array2[i]] = array2[i];
    }
  }
  value = Object.values(union);
  console.log(value);
}

//input

arr1 = [1, 4, 3];
arr2 = [3, 4, 5, 6, 7];

//output

unionArray(arr1, arr2);
