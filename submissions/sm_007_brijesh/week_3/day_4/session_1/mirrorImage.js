function mirrorimg(str) {
    var b = "abcdefghijklmnopqrstuvwxyz"
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //var str="AzyB"
    res = " "

    for (var i = 0; i < str.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (str[i] == a[j]) {
                res += a[25 - j]
            }
            if (str[i] == b[j]) {
                res += b[25 - j]
            }
        }
    } console.log(res)
}
(mirrorimg("AzyB"))