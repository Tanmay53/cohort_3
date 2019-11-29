function unionIs(x, y) {
    var x = x || [1, 5, 6, 8, 9, 45, 54, 61];
    var y = y || [15, 2, 7, 23, 39];
    var union = x.concat(y)
    console.log(union.sort(function (c, d) { return c - d }))
}
unionIs()