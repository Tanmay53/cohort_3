var input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// output = [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
// ]
console.log(rotate_matrix(input))

//Rotate Matrix by 90 degree
function rotate_matrix(input) {
    var arr = []
    var size = input.length;
    mid = Math.ceil(input.length/2)
    for(let i = 0; i < mid; i++){
        let temp = input[i]
        input[i] = input[input.length-i-1]
        input[input.length-i-1] = temp
    }

    //swapping numbers diagonally
    for(let i = 0; i < input.length; i++){
        for(let j = i; j < input[i].length; j++){
            let container = input[i][j]
            input[i][j] = input[j][i]
            input[j][i] = container
        }
    }
    return input
}