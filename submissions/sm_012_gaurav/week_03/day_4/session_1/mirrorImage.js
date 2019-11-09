function mirrorImage(input) {
    letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";  //String of all small and capital letters.
    var mirrorString = '';
    for (var i=0; i<input.length; i++) {
        var indexInLetters = letters.indexOf(input[i]);  //Variable to hold index of ith element of string in letters string.
        if (indexInLetters > 25 && indexInLetters < letters.length) {
            mirrorString += letters[letters.length - indexInLetters + 25];
        }
        else if (indexInLetters >= 0 && indexInLetters <= 25) {
            mirrorString += letters[letters.length - 27 - indexInLetters];
        }
        else {
            mirrorString += input[i];
        }
    }
    return mirrorString;
}



/* Some Test Case :- 
  Input :- AyzB, Output :- ZbaY
  Input :- "AyPzB CDef", Output :- "ZbKaY XWvu"
*/