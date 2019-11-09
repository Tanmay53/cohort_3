// sum of even numbers in an  array

function sumEvenArray(arr1) {

  var sum = 0;

  for (var i = 0; i < arr1.length; i++) {

    if (Number(arr1[i]) % 2 === 0)
      sum += arr1[i];

  }
  return sum;

}

console.log(sumEvenArray([8, 2, 3, 4, -12]));

// Input - [1, 2, 3, 4, 5] ;  [1, 2, 3, 4, 5] ; [8, 2, 3, 4, -12]
