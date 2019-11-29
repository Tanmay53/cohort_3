    var a = [1,2,3]
    var b = [6,7,8]
    var arr = []
    function unionArrays(a,b) {

    for(i=0, j=0; j<a.length,i<b.length;j++,i++){
        arr.push(b[i])
        arr.push(a[j])
    }
    console.log(arr)
}
unionArrays(a,b)