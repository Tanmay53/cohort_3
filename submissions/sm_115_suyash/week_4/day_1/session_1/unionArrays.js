var arr1 = [2, 3, 4, 6];
var arr2 = [3, 4, 5, 7];
var obj = {};
var arr = arr1.concat(arr2);
for (var i = 0; i < arr.length; i++) {
  var val = arr[i];
  if (obj[val] > 0) {
    obj[val]++;
  } else {
    obj[val] = 1;
  }
}
var newArr = [];
for (key in obj) {
  newArr.push(key)
}
console.log(newArr)