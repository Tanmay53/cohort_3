
array1 = ['1', '1', '2', '2', 'a', 'b', 'a']


function delDup(array) {
    noDup = {}
    for (i = 1; i <= array.length - 1; i++) {
        noDup[array[i]] = array[i]
    }

    console.log(Object.values(noDup))
} delDup(array1)