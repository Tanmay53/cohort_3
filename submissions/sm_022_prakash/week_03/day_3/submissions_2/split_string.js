givenString = 'masai school is better'
var outArray = []
splitchar = 'a'
var str = "";
//function to split string at the given character
function splitString(givenString){
for (var i = 0; i < givenString.length; i++) {

    if (givenString[i] != splitchar) {

        str += givenString[i];
    }
    else {
        outArray.push(str);
        str = "";
    }
}
outArray.push(str);
console.log(outArray)
return splitString;
}


splitString(givenString)
