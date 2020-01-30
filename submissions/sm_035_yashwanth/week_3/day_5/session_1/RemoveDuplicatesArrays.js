var obj = {};
function duplicates(a) {

    for (i = 0; i < a.length; i++) {
        obj[a[i]] = a[i]
    }
    console.log(Object.values(obj))
}
duplicates( [1,1,2,3,4,4])
