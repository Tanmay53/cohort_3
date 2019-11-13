var arr1 = [4, 2, 5, 6, 8, 12, 3, 1, 9, 13, 32, 7];
var arr2 = [3, 1, 9, 5, 5];

// CREAT FUNCTION FOR CHECK SUBSET
function checkDisjoint(arr1, arr2) {
  var count = 0;
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        count++
      }
    }
  }
  console.log(count)
  // console.log(arr1.length)
  if (arr2.length == count) {
    console.log(`[${arr2}] is superset of [${arr1}]`)
  } else {
    console.log(`[${arr2}] is NOT suset of [${arr1}]`)
  }
}

checkDisjoint(arr1, arr2)
