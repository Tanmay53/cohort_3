var a = [2, 3, 4, 5, 6,];
var b = [6, 8, 9, 0];

function checkUnion(a, b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    c.push(a[i]);
  }
  for (i = 0; i < b.length; i++) {
    if (indxOf(c, b[i]) == -1) { 
      c.push(b[i])
    }
  }
  console.log(c)
}
checkUnion(a, b)



function indxOf(array, num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return i
    }
    
  }
  if (array[i] != num) {
      return -1
    }
}
