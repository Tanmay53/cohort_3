//making a function for joining 2 arrays
function joinArray(array1, array2) {
  joinArr = [];
  for (var i = 0; i < array1.length; i++) {
    joinArr.push(array1[i]);
  }
  for (var j = 0; j < array2.length; j++) {
    joinArr.push(array2[j]);
  }
  return joinArr;
}

function symmetricDifference(array1, array2) {
  result = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        //all common element will became duplicate;
        array1[i] = "duplicate";
        array2[j] = "duplicate";
      }
    }
    //removing duplicate and putting result sDifference in result array;
    combined = joinArray(array1, array2);
    if (combined[i] != "duplicate") {
      result.push(combined[i]);
    }
  }
  return result;
}

console.log(symmetricDifference([1, 2, 3, 4, 8, 10, 5], [1, 2, 3, 4]));
