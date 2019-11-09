// Disjoint Array : Arrays that don't have anything in common
var arrayOne = [2, 4, 5, 6, 1];
var arrayTwo = [3, 7, 18, 2, 9];
var disjoint = false;
// function
function checkDisjointArray(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        disjoint = true;
      }
    }
  }
  disjoint
    ? console.log("These are not Disjoint")
    : console.log("These are Disjoint");
}

// method calling
checkDisjointArray(arrayOne, arrayTwo);
