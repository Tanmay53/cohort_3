function indexesAre(a, val) {
    var a = [1, 1, 2, 2, 3, 3, 5, 6, 1, 2, 3, 4, 7];
    var val = val || 3;
    var arr = a || [];
    var c= 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == val) {
            arr.push(i);
            c++;
        }
    }
    if (c== 0) {
        console.log ( -1 )
    }
    else {    
    console.log ('All' ,+ val + ' index numbers are  ' , arr ,'& type is '+ typeof(arr))
    }
}
indexesAre ()