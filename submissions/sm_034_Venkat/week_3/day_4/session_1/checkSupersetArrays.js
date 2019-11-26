function superset(a, b) {
    var a = a || [1, 2, 3, 5, 6, 7, 8];
    var b = b || [4, 6, 7];
    var c = 0;
    for (i = 0; i < b.length; i++) {
        for (j = 0; j < a.length; j++)
            if (a[j] == b[i]) {
                // console.log(b[i]);
                c++;
            }
    }
    if (c == b.length) {
        console.log('b is superset of a')
    }
    else {
        console.log('b is not superset of a')
    }
}
superset()