function splitString (string, char){
    var arr = [];
    var splitChar = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] != char){
            splitChar += string[i];
        }
        else{
            arr.push(splitChar);
            splitChar = "";
        }
    }
    arr.push(splitChar);
    return arr;
}
console.log(splitString("Prabhat Kumar Ranajan","a"))