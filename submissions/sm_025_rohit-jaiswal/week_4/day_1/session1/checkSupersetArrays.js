function checkSuperset(a, b) {
    var object = {}
    for (var i = 0; i < a.length; i++) {
        object[a[i]] = a[i]
    }
    for (var i = 0; i < b.length; i++) {
        if (object[b[i]] == undefined)
            return "No Superset Found"
    }
    return "Superset Found"
}
console.log(checkSuperset([1, 2, 3, 5], [3, 5, 6]))