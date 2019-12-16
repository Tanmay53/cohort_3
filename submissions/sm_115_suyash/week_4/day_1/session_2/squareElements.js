var arr = [2, 3, 5, 7, 6]
function squreEle(arr) {
  var sqr = arr.map(function (val) {
    return val * val;
  })
  return sqr;
}
console.log(squreEle(arr))