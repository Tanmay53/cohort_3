function disary() {
    var a = [1, 2, 3, 3, 5];
    var b = [4,6,7,8,9];
    var flag = true
    for (i = 0; i < a.length; i++) {
        for(j=0;j<b.length;j++)
        if (a[i] == b[j]) {
            flag = false;
            break;
        }
    }
    if (flag == false) {
        console.log("a,b are not dis joint")
    }
    else {
        console.log("a,b are disjoint")
    }

}
disary()