//Function to return array of Splitted strings through a given character.
function splitString(string, splitCharacter) {
    var subString = '';    //Variable to hold substring which will be formed while splitting.
    var arrayOfStrings = [];   //An empty array to push in all the substrings formed during splitting.
    var arrayIndex = 0;   //Variable to keep track of the index of array "arrayOfStrings".
    for (var i=0; i<string.length; i++) {
        if (string[i] != splitCharacter) {
            subString += string[i];
        }
        else {
            if (subString != '') {
                arrayOfStrings[arrayIndex] = subString;
                arrayIndex++;
            }
            subString = '';
        }
    }
    if (subString != '') {
        arrayOfStrings[arrayIndex] = subString;
    }
    return arrayOfStrings;
}

//Calling splitString function.
console.log(splitString("Masai School", 'a'));   //Prints "['M','s','i School']".