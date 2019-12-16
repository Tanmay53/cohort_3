arr = [9, 7, 5, 9, 9, 5, 4, 9, 5, 4]
target = 9

function findCountDuplicates(a, b) {
    test = {}

    for (i = 0; i < a.length; i++) {
        count = 0
        if (b == a[i]) {
            test[i] = b

        }
    }
    console.log(Object.keys(test).length)

}
findCountDuplicates(arr, target)