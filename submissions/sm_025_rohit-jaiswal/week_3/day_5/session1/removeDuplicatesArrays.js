function removDuplicatesArrays(test) {
    var output = []
    for (i = 0, j = i + 1; i <= test.length - 1, j <= test.length - 1; i++, j++) {
        if (test[i] = test[j]) {
            output.push(test[i])
        }
    }
    console.log(output)
}
removDuplicatesArrays([9, 7, 5, 9, 9, 5, 4, 9, 5, 4])