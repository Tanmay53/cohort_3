var arr1 = [11, 2, 3];
var arr2 = [9, 10, 11];
var flg = true
var obj = {}
var arr = arr1.concat(arr2)
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
    flg = false;
  }
}
console.log(flg)
