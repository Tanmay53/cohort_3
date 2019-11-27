var x = [1, 2, 3, 4, 5, 6, 7];
var y = [9, 8, 11, 54];
var c = 0
for (i = 0; i < x.length; i++) {
    for (j = 0; j < y.length; j++) {
        if (x[i] == y[j])
            c++
    }
}
if (c >= 1)
    console.log('x, y are not disjiont arrays')
else {
    console.log('x,y are two disjiont arrays')
}