fruits = ['grapes', 'mango', 'apple', 'banana', 'pear']
seedless = ['grapes', 'banana']


function arrayDifference(a, b) {
  fruits2 = []

  var cnt = 0;
  for (i = 0; i < a.length; i++) {
   cnt = 0; // reset count (to remove repeated elements)

    for (j = 0; j < b.length; j++) {
      if (a[i] != b[j]) {
        cnt = cnt+0
      }
      else{
        cnt++
      }
    }
    if (cnt == 0) {
      fruits2.push(a[i])
    }
  }
  console.log(fruits2)


}
arrayDifference(fruits, seedless)