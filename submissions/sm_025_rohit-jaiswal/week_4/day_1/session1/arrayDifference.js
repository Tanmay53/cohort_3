function arrDifference(a, b) {
    var object = {},
        output = []
    for (var i = 0; i < b.length; i++) {
        object[b[i]] = b[i]
    }
    for (var i = 0; i < a.length; i++) {
        if (object[a[i]] == undefined)
            output.push(a[i])
            // (A-B)
    }
    return output
}

console.log(arrDifference([9, 4, 5, 7, 7, 2, 6, 3, 4, 6], [9, 7, 5, 9, 9, 5, 4, 9, 5, 4]))