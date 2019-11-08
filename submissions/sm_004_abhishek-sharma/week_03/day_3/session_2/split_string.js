var sentence = "Masai School", splitChar = 'a' , arr = [], str = ""
var count = sentence.length
function splitString() {
    for(var i = 0; i < count; i++){
        if(sentence[i] == splitChar){
            arr.push(str)
            str = ""
            continue
        }
        str += sentence[i]
    }
    arr.push(str)
    console.log(arr)
}

splitString()
