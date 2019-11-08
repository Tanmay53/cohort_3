// Subset Array : an Array is said to be subset when all element present in second array

var arrayOne = [2, 5, 9, 100, 55];
var arrayTwo = [2, 4, 5, 6, 1, 5, 9, 10, 15, 100];

var isSubset = false;
// function
function checkSubsetArray(arr1, arr2) {
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      isSubset = true;
    } else {
      isSubset = false;
    }
  }
  return isSubset;
}

// method calling
checkSubsetArray(arrayTwo, arrayOne)
  ? console.log("arrayOne is a subset of arrayTwo")
  : console.log("arrayOne is not a subset of arrayTwo");
