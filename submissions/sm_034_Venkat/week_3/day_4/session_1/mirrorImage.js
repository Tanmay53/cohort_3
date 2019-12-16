function strg(string) {
    var string = string || 'AyzB';
    var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var s = 'abcdefghijklmnopqrstuvwxyz';
    var str = ''
    for (i = 0; i < string.length; i++) {
        for (j = 0; j < c.length; j++) {
            if (string[i] === c[j]) {
                str = str + s[25 - j]
            }
            else if (string[i] === s[j]) {
                str = str + c[25 - j]
            }
        }
    }
    console.log(str)
}
strg('AvYfkjGR')