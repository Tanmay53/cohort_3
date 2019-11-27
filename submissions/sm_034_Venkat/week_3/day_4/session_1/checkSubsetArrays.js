function subset(a, b) {
    var a = a || [4, 6, 7];
    var b = b || [1, 2, 3, 4, 5, 6, 8];
    var c = 0;
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++)
            if (a[i] == b[j]) {
                // console.log(a[i]);
                c++;
            }
    }
    if (c == a.length) {
        console.log('a is subset of b')
    }
    else {
        console.log('a is not subset of b')
    }
}
subset()