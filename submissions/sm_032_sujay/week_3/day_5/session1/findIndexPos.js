arr1 = ['0', '1', '0', '1', '4']
val1 = '1'
arr2 = ['add', 'add', 'mul', 'add', 'div']
val2 = 'add'

function findIndexPos(array, value) {
    var occur = []
    var c = 0
    for (i = 0; i <= array.length - 1; i++) {
        if (array[i] == value) {
            occur.push(i)
            c++
        }
    }
    if (c > 0) {
        console.log(occur[0]) // first ele of occur is first occurance!
    }
    else {
        console.log(-1)
    }

}

findIndexPos(arr1, val1)