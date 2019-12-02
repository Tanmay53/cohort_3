var arr = ['2', '3', '2', '4', '5', '3']


function rmDuplicates(array) {
    var copy = []
    for (i = 1, j = i + 1; i <= array.length - 1, j <= array.length - 1; i++ , j++) {
        if (array[i] != array[j]) {
            copy.push(array[i])
        }
    }
    console.log(copy)
} rmDuplicates(arr)