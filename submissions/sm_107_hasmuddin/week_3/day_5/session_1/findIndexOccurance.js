//creating a function to find index of given array;
function findIndexOccurance(value, array) {
  indexArr = []; //array for collecting all index of value;
  for (var i = 0; i < 1; i++) {
    for (var index = 0; index < array.length; index++) {
      if (Number(value) == Number(array[index])) {
        indexArr.push(index);
      }
    }
  }
  if (indexArr.length < 1) {
    return -1;
  }
  return indexArr;
}

//calling function to find index;

console.log(findIndexOccurance(2, [2, 3, 6, 2, 2, 5, 19, 2, 6]));

//output [ 0, 3, 4, 7 ];
