inputArr = ["car","bike","cycle"]
inputAddChar = "k"
reqString = ""
for (i = 0; i < inputArr.length; i++) {
    reqString += String(inputArr[i]) + String(inputAddChar)
}
console.log(reqString)