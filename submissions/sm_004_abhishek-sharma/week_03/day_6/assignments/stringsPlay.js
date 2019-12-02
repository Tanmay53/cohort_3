var small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function camelCase(str) {
    var size = str.length
    var newStr = ''
    for (var i = 0; i < size; i++) {
        if (str[i] != " ") 
            newStr += str[i]
        else {
            for (var j = 0; j < 26; j++) {
                if (small[j] == str[i+1]) {
                    newStr += capital[j]
                    break
                }
            }
            i++
        }
        // console.log(newStr)
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


// function hypenCase() {

// }

console.log(camelCase("abhishek sharma kaundilya"))
console.log(snakeCase("abhishek sharma"))
console.log(snakeCase("linus torvalds"))
