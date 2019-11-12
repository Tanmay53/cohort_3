intArr = [1, 2, 8, 4, 5, 9, 6, 7];

chekArr = intArr.map(function(element, index, intArr) {
  if (intArr[index - 1] > element) {
    return -1;
  } else {
    return 1;
  }
});

console.log(chekArr);
