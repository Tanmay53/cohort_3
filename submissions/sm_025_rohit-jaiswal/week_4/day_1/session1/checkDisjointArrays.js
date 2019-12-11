function checkDisjoint(a, b) {
    var object = {}
    for (var i = 0; i < a.length; i++) {
        object[a[i]] = a[i]
    }
    for (var i = 0; i < b.length; i++) {
        if (object[b[i]] == undefined)
            object[b[i]] = b[i]
        else
            return "NonDisjoint"
    }
    return "Disjoint"
}

console.log(checkDisjoint([1, 2, 3], [4, 5, 6]))