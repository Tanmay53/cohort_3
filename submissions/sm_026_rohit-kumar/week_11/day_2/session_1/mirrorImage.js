const getChar = (base) => {
    return Math.abs(base - 25)
}
const getCorrespondingChar = (char) => {
    let ascii = char.charCodeAt(0)

    if(ascii >= 65 && ascii <= 90) {
        let code = getChar(ascii - 65)
        return String.fromCharCode(code + 65)
    }
    if(ascii >= 97 && ascii <= 122) {
        let code = getChar(ascii - 97)
        return String.fromCharCode(code + 97)
    }

    return char

}

getMirrorImage = (str) => {
    let res = str.split('').map((char) => {
                return getCorrespondingChar(char)
            })
    return res.join('')
} 

// console.log(getMirrorImage('AyzB'))
module.exports = getMirrorImage