arr1 = [1, 2, 3, 4, 5, 4, 5]
arr2 = [6, 7, 8, 9, 2, 3]
count = 0;
result = []
function unionarrays(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    flag = true;
    for (j = 0; j < result.length; j++) {
      if (result[j] == arr1[i]) {
        flag = false;
        break
      }
    }
    if (flag == true) {
      result.push(arr1[i])
    }
  }
  for (i = 0; i < arr2.length; i++) {
    flag = true;
    for (j = 0; j < result.length; j++) {
      if (result[j] == arr2[i]) {
        flag = false;
        break
      }
    }
    if (flag == true) {
      result.push(arr2[i])
    }
  }
  return result
}
console.log(unionarrays(arr1, arr2))