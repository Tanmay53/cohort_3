function duplicatesCountIs(a, val) {
    var a = a || [1, 1, 2, 2, 3, 3, 5, 6, 3, 1, 2, 3, 4, 7];
    var val = val || 3;
    var c= 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == val) {
            c++;
        }
    }
    if (c != 0) {
        console.log (val +' Duplicates Count Is '+ c)
    }
}
duplicatesCountIs ()