function rmDuplicates(a) {
    var a = a || [1, 1, 2, 2, 3, 3, 5, 6, 1, 2, 3, 4, 7]
    var obj = {};
    for (i = 0; i < a.length; i++) {
        obj[a[i]] = a[i]
    }
    console.log(Object.values(obj))
}
rmDuplicates()