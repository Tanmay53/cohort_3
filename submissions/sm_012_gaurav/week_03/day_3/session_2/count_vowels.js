//Function to return Count of Vowels in the given string.
function countVowels(string) {
    if (string.length === 0) {
        return "The String is Empty."
    }
    vowelsArray = ['a','e','i','o','u','A','E','I','O','U'];   //Array of Vowels
    var numberOfVowels = 0;    //Variable to hold count of Vowels.
    for (var i=0; i<string.length; i++) {
        for (var j=0; j<vowelsArray.length; j++) {
            if (string[i] === vowelsArray[j]) {
                numberOfVowels++;
                break;
            }
        }
    }
    return numberOfVowels;
}

//Calling the countVowels function.
console.log(countVowels('Masai SCHOOL'));   //Prints 5.