function camelCase(str) {
    var size = str.length
    var newStr = ''
    var small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (var i = 0; i < size; i++) {
        if (str[i] == " ") {
            for (var j = 0; j < 26; j++) {
                if (small[j] == str[i + 1]) {
                    newStr[i] = capital[j]
                    console.log(newStr[i])
                    break
                }
            }
            i++
            continue
        }
        newStr += str[i]
    }
    return newStr
}

function snakeCase(str) {
    var size = str.length
    for (var i = 0; i < size; i++) {
        if (str[i] == " ") {
            str[i] = "_"
        }
    }
    return str
}

console.log(snakeCase("linus torvalds"))

// function hypenCase() {

// }

// console.log(camelCase("abhishek sharma"))
// console.log(snakeCase("abhishek sharma"))