var arr = [10, 20, 30, 10, 20, 50, 40, 60]
res = {}
function removeDuplicateArrays(arr) {
  for (i = 0; i < arr.length; i++) {
    res[arr[i]] = arr[i]
  }
  return (Object.values(res))
}
console.log(removeDuplicateArrays(arr))