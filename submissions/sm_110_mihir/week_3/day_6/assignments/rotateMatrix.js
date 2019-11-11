function rotateMatrix(board){
    var temp
    // traspose the matrix
    for(var row=0;row<board.length;row++){
        for(var column=0;column<row;column++){
            temp=board[row][column]
            board[row][column]=board[column][row]
            board[column][row]=temp

        }
    }
    // swap extreme columns
    for(i=0;i<parseInt(board.length/2);i++){

        for(var row=0;row<board.length;row++){
            temp=board[row][i]
            board[row][i]=board[row][board.length-1-i]
            board[row][board.length-1-i]=temp
        }
    }
    return board
}
// testing with 2x2, 3x3, 4x4 matrix
// create 2x2 matrix
var board=[],value=1
for (var row=0;row<2;row++){
    board[row]=[]
    for(var column=0;column<2;column++)
        board[row][column]=value++
}
console.log('2x2 matrix:')
console.log(board)
console.log('2x2 rotated:')
console.log(rotateMatrix(board))
// create 3x3 matrix
var board=[],value=1
for (var row=0;row<3;row++){
    board[row]=[]
    for(var column=0;column<3;column++)
        board[row][column]=value++
}
console.log('3x3 matrix:')
console.log(board)
console.log('3x3 rotated:')
console.log(rotateMatrix(board))
// create 4x4 matrix
var board=[],value=1
for (var row=0;row<4;row++){
    board[row]=[]
    for(var column=0;column<4;column++)
        board[row][column]=value++
}
console.log('4x4 matrix:')
console.log(board)
console.log('4x4 rotated:')
console.log(rotateMatrix(board))

//Tested with 3x3 matrix and 4x4 matrix 