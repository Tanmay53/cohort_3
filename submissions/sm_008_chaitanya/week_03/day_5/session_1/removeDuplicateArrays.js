var arr = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7]
result = []
function removeDuplicateArrays(arr) {
  for (i = 0; i < arr.length; i++) {
    flag = true
    for (j = 0; j < result.length; j++) {
      if (arr[i] == result[j]) {
        flag = false
        break
      }
    }
    if (flag == true) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(removeDuplicateArrays(arr))