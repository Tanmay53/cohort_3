//Function to split string into single characters and store into an array.
function splitChar(string) {
    var generatedArray = [];    //Empty array to store characters.
    for (var i=0; i<string.length; i++) {
        generatedArray[i] = string[i];
    }
    return generatedArray;
}

//Calling splitChar function.
console.log(splitChar('Hello'));  //Prints ['H','e','l','l','o'].