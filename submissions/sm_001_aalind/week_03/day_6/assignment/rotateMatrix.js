
// arr is matrix and n x n is dimension/degree of matrix
function rotateMatrix(arr, n) {
  for(var i = 0; i < (n/2); i++) {
    for(var j = i; j < (n-1-i); j++) {
      temp = arr[n-1-i][j];
      arr[n-1-i][j] = arr[n-1-j][n-1-i];
      arr[n-1-j][n-1-i] = arr[i][n-1-j];
      arr[i][n-1-j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  return arr;
}

arr = [
  [1,2,3,1,1,7],
  [4,5,6,1,2,9],
  [7,8,9,1,3,9],
  [1,2,5,6,6,0],
  [9,7,4,5,6,1],
  [2,5,1,7,8,9]
]

console.log(rotateMatrix(arr, 6));