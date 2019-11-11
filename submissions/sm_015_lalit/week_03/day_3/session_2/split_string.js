inputString = "lalitsheoran"
inputSplitchar = "a"
reqArray = []
reqChar = ""
for (i = 0; i < inputString.length; i++) {
    if (inputString[i] !== inputSplitchar) {
        reqChar = reqChar + inputString[i]

    } else {
        reqArray.push(reqChar)
        reqChar = ""
    }
}
if (reqChar.length > 0) {
    reqArray.push(reqChar)
    reqChar = ""
}
console.log(reqArray)