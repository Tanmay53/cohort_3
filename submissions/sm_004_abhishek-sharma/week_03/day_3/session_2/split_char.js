var sentence ='Masai School', arr = [], str = ""
var count = sentence.length
function splitChar() {
    for(var i = 0; i < count; i++){
        str = sentence[i]
        arr.push(str)
    }
    console.log(arr)
}

splitChar()