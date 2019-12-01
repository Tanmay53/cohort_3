function checkDisjoint(a, b) {
    var a = [1, 2, 3]
    var b = [4, 5, 6]
    var count = 0

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                count++
            }
        }
    }
    if (count == 0) {
        console.log("Disjoint")
    }
    else {
        console.log("Non_Disjoint")
    }
} checkDisjoint()