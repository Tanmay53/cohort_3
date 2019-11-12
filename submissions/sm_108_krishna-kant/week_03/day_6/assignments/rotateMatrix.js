// Initialization of 2D Array
var array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Rotating Matrix
function rotateMatrix(array2D) {
  var iteration = array2D.length;
  var temp = 0;
  if (array2D.length == array2D[0].length) {
    for (i = 0; i < iteration / 2; i++) {
      for (j = i; j < iteration - 1; j++) {
        temp = array2D[i][j];
        array2D[i][j] = array2D[iteration - 1 - j][i];
        array2D[iteration - 1 - j][i] =
          array2D[iteration - 1 - i][iteration - 1 - j];
        array2D[iteration - 1 - i][iteration - 1 - j] =
          array2D[j][iteration - 1 - i];
        array2D[j][iteration - 1 - i] = temp;
      }
    }
    print2d(array2D);
  } else {
    console.log("Matrix must be in NXN form");
  }
}

// Calling Function
rotateMatrix(array2D);

// printing array
function print2d(array2D) {
  for (i = 0; i < array2D.length; i++) {
    console.log(array2D[i]);
  }
}
