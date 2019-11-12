// Objects of array
var array = {
  one: [0],
  two: [1]
};
var disjoint = false;
// function checking weather is it disjoint or not
function checkDisjointArray(arr1, arr2) {
  arr1.forEach(function(element) {
    if (arr2.includes(element)) {
      disjoint = true;
    }
  });
  disjoint ? console.log(false) : console.log(true);
}
// method calling
checkDisjointArray(array.one, array.two);
