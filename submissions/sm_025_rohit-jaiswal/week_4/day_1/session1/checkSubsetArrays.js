function checkSubset(a, b) {
    var object = {}
    for (var i = 0; i < a.length; i++) {
        object[a[i]] = a[i]
    }
    for (var i = 0; i < b.length; i++) {
        if (object[b[i]] == undefined)
            object[b[i]] = b[i]
        else
            return "Subset Found"
    }
    return "No Subset Found"
}

console.log(checkSubset([1, 2, 3], [3, 5, 6]))