var aditya1 = [4, 2, 5, 6, 8, 12];
var aditya2 = [3, 1, 9];

function checkDisjoint(arr1, arr2) {
  var count = 0;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] != arr2[j]) {
        count++
      } 
    }
  }
  if (arr1.length * arr2.length == count) {
    console.log(`[${arr1}] and [${arr2}] are disjoint`)
  } else {
    console.log(`[${arr1}] and [${arr2}] are NOT disjoint`)
  }
}

checkDisjoint(aditya1, aditya2)
