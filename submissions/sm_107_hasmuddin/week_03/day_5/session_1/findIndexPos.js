//creating a function to find index of given array;
function findIndexPos(value, array) {
  for (var i = 0; i < 1; i++) {
    for (var index = 0; index < array.length; index++) {
      if (Number(value) == Number(array[index])) {
        return index;
      }
    }
  }
  return -1;
}

// revoking function

console.log(findIndexPos(5, [1, 2, 5, 2, 1, 3, 9, 6]));

//output 2
