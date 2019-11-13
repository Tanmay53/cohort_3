//Function to rotate 2D array by 90 degrees clockwise. (Only for NxN matrix).
function rotateMatrix(mat) {
    var nRows = mat.length;   //Variable to store number of rows of 2D array.
    var i = 0;
    while (i < nRows - 2) {
        var j = i;
        while (j < nRows-i-1) {
            var temp  = mat[i][j];
            mat[i][j] = mat[nRows - 1 - j][i];
            mat[nRows - 1 - j][i] = mat[nRows - i - 1][nRows - 1 - j];
            mat[nRows - i - 1][nRows - j - 1] = mat[j][nRows - i - 1];
            mat[j][nRows - 1 - i] = temp;
            j++;
        }
        i++;
    }
    for (var i = 0; i < nRows; i++) {
        console.log(mat[i]);
    }
}

/* Test Cases :- 
   I/P :- [[1,2,3],   O/P :- [[7,4,1],
           [4,5,6],           [8,5,2],
           [7,8,9]]           [9,6,3]]

   I/P :- [[ 1, 2, 3, 4 ],        O/P :- [[ 13, 9, 5, 1 ], 
           [ 5, 6, 7, 8 ],                [ 14, 10, 6, 2 ],
           [ 9, 10, 11, 12 ],             [ 15, 11, 7, 3 ],
           [ 13, 14, 15, 16 ]]            [ 16, 12, 8, 4 ]]
*/