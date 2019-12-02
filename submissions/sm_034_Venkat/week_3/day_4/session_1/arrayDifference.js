function differenceIs(a, b) {
    var a = a || [1, 2, 6, 8, 9, 45, 61];
    var b = b || [5, 2, 7, 6, 45];
    var d = [];
    for (i = 0; i < a.length; i++) {
        var count = 0
        for (j = 0; j < b.length; j++) {

    // simple way by "splice"
    //         if (a[i] === b[j]) {
    //             // console.log(i,a[i])
    //             a.splice(i, 1)
    //         }
    //     }
    // }
    //console.log(a)

            if (a[i] != b[j]) {
                count++;
            }
            // console.log(a[i], b[j], count)
            if (count == b.length) {
                d.push(a[i])
            }
        }
    }
    console.log(d.sort(function (a, b) { return a - b }))
}
differenceIs()