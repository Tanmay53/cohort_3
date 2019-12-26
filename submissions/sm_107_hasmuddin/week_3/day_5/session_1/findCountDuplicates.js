//object which have an array;
//object
arrObject = {
  arr: [1, 2, 6, 7, 2, 6, 9],
  target: 2
};

//function for count duplicate in array
function countDuplicate(arr, target) {
  cnt = 0;
  for (i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
      cnt += 1;
    }
  }
  console.log(cnt);
}
//invoking function;

countDuplicate(arrObject.arr, arrObject.target);
