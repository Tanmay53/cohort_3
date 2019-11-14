var arr1 = [4, 2, 5, 6, 8, 12, 3, 1, 9, 13, 32, 7];
var arr2 = [3, 1, 9, 5,5];

// CREAT FUNCTION FOR CHECK SUBSET
function checkDisjoint(arr1, arr2) {
  var count = 0;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr2[j] == arr1[i]) {
        count++
      }
    }
  }
  console.log(count)
  // console.log(arr1.length)
  if (arr2.length == count) {
    console.log(`[${arr2}] is subset of [${arr1}]`)
  } else {
    console.log(`[${arr2}] is NOT subset of [${arr1}]`)
  }
}

checkDisjoint(arr1, arr2)
