function symDiffIs(x, y) {
    var x = x || [1, 5, 6, 8, 9, 61];
    var y = y || [3, 6, 2, 7, 23, 9];
    var u = []
    for (i = 0; i < x.length; i++) {
        var c = 0;
        for (j = 0; j < y.length; j++) {

            // simple way by "splice"== only working for 2 common values,
            // if u give 3 common 3rd one pring in both.
            // if (x[i] == y[j]) {
            //     c++
            // console.log(i,x[i])
            // console.log(j,y[j])
            //             x.splice (i, 1)
            //             y.splice (j, 1)
            //         }
            //     }
            // }
            //         var u = x.concat(y).sort(function (p, q) { return p - q })
            //         console.log(u)

            if (x[i] != y[j]) {
                c++;
            }
            if (c == y.length) {
                u.push(x[i])
            }
        }
    }
    for (i = 0; i < y.length; i++) {
        var d = 0;
        for (j = 0; j < x.length; j++) {
            if (y[i] != x[j]) {
                d++;
            }
            console.log(y[i], x[j], d)
            if (d == x.length) {
                u.push(y[i])
            }
        }
    }
    // var arr = u.concat(y);
    console.log(u.sort(function (a, b) { return a - b }))
    // console.log(u)
}
symDiffIs()