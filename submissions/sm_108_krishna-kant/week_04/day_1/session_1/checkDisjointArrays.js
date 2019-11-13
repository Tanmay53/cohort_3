// Objects of array
var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
var obj2 = { a: 10, b: 6, c: 7, d: 8, e: 9 };
var disjoint = false;
// function checking weather is it disjoint or not
function checkDisjointArray(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
  arr1.forEach(function(element) {
    if (indexOf(arr2, element) != -1) {
      disjoint = true;
    }
  });
  disjoint ? console.log(false) : console.log(true);
}
// method calling
checkDisjointArray(Object.values(obj1), Object.values(obj2));

// indexof
function indexOf(args, value) {
  for (i = 0; i < args.length; i++) {
    if (value == args[i]) {
      return i;
    }
  }
  return -1;
}
