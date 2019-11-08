//Function to return Count of Consonants in the string.
function countConsonants(string) {
    if (string.length === 0) {
        return "The String is Empty.";
    }
    var consonantsArray = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t',
                            'v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N',
                            'P','Q','R','S','T','V','W','X','Y','Z'];     //Array of Consonants.
    var numberOfConsonants = 0;   //Variable to hold count of consonants.
    for (var i=0; i<string.length; i++) {
        for (var j=0; j<consonantsArray.length; j++) {
            if (string[i] == consonantsArray[j]) {
                numberOfConsonants++;
                break;
            }
        }
    }
    return numberOfConsonants;
}

//Calling the countVowels function.
console.log(countConsonants('Hello Masai'));   //Prints 5.