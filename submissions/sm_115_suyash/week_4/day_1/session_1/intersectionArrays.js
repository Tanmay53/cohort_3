var arr1 = [2, 3, 5, 6, 7];
var arr2 = [1, 3, 5, 6, 9];
var arr = [];
var newArr = [];
var obj = {};
arr = arr1.concat(arr2)
for (var i = 0; i < arr.length; i++) {
  var val = arr[i];
  if (obj[val] > 0) {
    obj[val]++;
  } else {
    obj[val] = 1;
  }
}

for (key in obj) {
  if (obj[key] > 1) {
    newArr.push(key)
  }
}
console.log(newArr)