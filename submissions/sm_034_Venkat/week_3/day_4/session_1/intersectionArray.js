function intersectionIs(x, y) {
    var x = x || [1, 5, 6, 8, 9, 45, 61];
    var y = y || [5, 2, 7, 6, 2, 23, 9];
    var inter = [];
    for (i = 0; i < y.length; i++) {
        for (j = 0; j < x.length; j++) {
            if (x[j] == y[i]) {
                inter.push(y[i])
            }
        }
    }
    console.log(inter.sort(function(l,m) {return l-m}))
}
intersectionIs()