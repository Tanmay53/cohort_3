//Function to generate and return a string joining each element in the array with the given character.
function joinArray (array, character) {
    if (array.length == 0) {
        return "Array is Empty."
    }
    var generatedString = '';    //Variable to store generated string.
    for (var i=0; i<array.length; i++) {
        if (i==0) {
            generatedString += array[i];
        }
        else {
            generatedString += (character+array[i]);
        }
    }
    return generatedString;
}

//Calling joinArray function.
console.log(joinArray(['a','b','c'], '*'));   //Prints a*b*c