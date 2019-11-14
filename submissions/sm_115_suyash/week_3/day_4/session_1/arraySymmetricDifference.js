var a = [2, 3, 4, 5, 6,22,43,54,23];
var b = [6, 8, 9, 0, 2, 4, 22, 43, 54, 23];

function checkUnion(a, b) {
  var c = [];
  for (i = 0; i < b.length; i++) {
    if (indxOf(a, b[i]) == -1) {
      c.push(b[i])
    }
  }
  for (i = 0; i < a.length; i++) {
    if (indxOf(b, a[i]) == -1) {
      c.push(a[i])
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
