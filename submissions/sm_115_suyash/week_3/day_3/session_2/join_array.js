function joinArr(arr, join) {
  str = ''
  for (var i = 0; i < arr.length; i++) {
    str += arr[i] + join;
  }
  return str;
}




var arr = [h, e, l, l, o];
var join = '\n';

console.log(joinArr(arr, join))