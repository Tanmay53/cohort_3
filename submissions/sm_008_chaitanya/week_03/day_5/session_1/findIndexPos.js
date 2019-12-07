arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 9, 8, 7, 5, 3, 4]
function findIndex(target) {
  target = target || 'p'
  var pos = -1
  for (i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
      pos = i
    }
  }
  if (pos >= 0) {
    console.log(pos)
  }
  else {
    console.log('-1')
  }
}
findIndex(3)