function differenceIs(x, y) {
    var x = x || [1, 5, 6, 8, 9, 45, 61];
    var y = y || [5, 2, 7, 6];
    var a = x.sort(function (l, m) { return l - m });
    var b = y.sort(function (l, m) { return l - m });
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1)
                console.log(i)
            }
        }
    }
    console.log(a)
}
differenceIs()