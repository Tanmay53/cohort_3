function splitString() {
var inpt = "Rohit Jaiswal"; 
var splitChar = 'i';
var arr = [];
var str = " "
var count = inpt.length
    for(var i = 0; i < count; i++){
        if(inpt[i] == splitChar){
            arr.push(str)
            str = ""
            continue
        }
        str += inpt[i]
    }
    arr.push(str)
    console.log(arr)
}

splitString()