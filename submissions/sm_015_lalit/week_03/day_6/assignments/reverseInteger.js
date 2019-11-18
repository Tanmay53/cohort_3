function reverseInteger(integer) {
    len = integer.length;
    max = integer[0]
    for (i = 0; i < len; i++) {
        integer[i] = Number(integer[i])
        if (max < integer[i]) {
            max = integer[i]
        }
    }
    max = max + 1
    for (i = 0; i < len; i++) {
        integer[i] = Number(integer[i])
        integer[i] = max - integer[i]
    }
    console.log(integer)
}

var integer = ["1", "2", "3", "4", "5", "6", "7", "8"]
reverseInteger(integer)