function mirrorImage(input) {
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var small = "abcdefghijklmnopqrstuvwxyz"
    var x, y;
    var result = " "
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < cap.length; j++) {
            if (input[i] == cap[j]) {
                result += cap[25 - j]
            }
            else if (input[i] == small[j]) {
                result += small[25 - j]
            }
        }
    }
    return result
}
console.log(mirrorImage("AyzB"))