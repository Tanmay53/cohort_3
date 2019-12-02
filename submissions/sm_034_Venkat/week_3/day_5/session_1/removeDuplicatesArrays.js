var x = x || [1, 2, 2, 2, 3, 4, 4, 4, 4, 2, 2, 1]
var a = [];
for (i = 0; i < x.length; i++) {
    // flag = true;
    k = 0
    for (j = 0; j < a.length; j++) {
        if (x[i] == a[j]) {
            // flag = false;
            k = 1
            break;
        }
    }
    // if (flag == true)
    if (k == 0) {
        a.push(x[i]);
    }
}
console.log(a)