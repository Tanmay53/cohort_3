function reverseInteger(input) {
    var convert = ''
    var str = input.toString()
    for (i = str.length - 1; i >= 0; i--) {
        convert += str[i]
    }
    var output = parseInt(convert)
    return output
}
var input = 123456
console.log(reverseInteger(input))

