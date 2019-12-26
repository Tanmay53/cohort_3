// var obj = {
//   i: "suyash",
//   c: () => console.log(this.i),
//   m: function() {
//     console.log(this.i);
//   }
// };
// obj.c();

var a = [4, 5, 7, 8, 6];
var b = [];
function evenArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      b.push(arr[i]);
    }
  }
}
evenArr(a);
console.log(b);
