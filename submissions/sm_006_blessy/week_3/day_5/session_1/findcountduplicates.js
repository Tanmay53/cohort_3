let arr = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 5, 5, 5, 4];
let target = 5;
function countduplicates(arr, target) {
  let obj = {}
  obj[target] = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var key in obj) {
      if (Number(key) === arr[i]) {
        obj[key] = obj[key] + 1;
      }
    }
  }
  console.log(obj)
}
return countduplicates(arr, target)