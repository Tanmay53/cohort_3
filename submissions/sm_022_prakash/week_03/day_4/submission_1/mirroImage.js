
var smallStr = "abcdefghijklmnopqrstuvwxyz"
var capStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var givenString = "PraKaSH"
var outString = ""
//function to mirror image a give String
function mirroImage(givenString){
for(var i =0; i<givenString.length; i++){
if(smallStr.indexOf(givenString[i])!= -1){
    outString += smallStr[26-smallStr.indexOf(givenString[i])-1] //concatenating  output string with mirror index of the element 
}
else if(capStr.indexOf(givenString[i])!= -1){
    outString += capStr[26-capStr.indexOf(givenString[i])-1]  //concatenating  output string with mirror index of the element 
    
}

}
console.log(outString)
return outString

}

mirroImage(givenString)