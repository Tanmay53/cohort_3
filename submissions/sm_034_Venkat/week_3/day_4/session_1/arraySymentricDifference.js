function symDiffIs(x, y) {
    var x = x || [1, 5, 6, 8, 9, 45, 61];
    var y = y || [3, 6, 2, 7, 23, 45, 9];
    for (i = 0; i < x.length; i++) {
        for (j = 0; j < y.length; j++) {
            if (x[i] == y[j]) {
                // console.log(i,y[j])
                y.splice(j, 1)
            }
        }
    }
    var u = x.concat(y).sort(function (p, q) { return p - q })
    console.log(u)
}
symDiffIs()