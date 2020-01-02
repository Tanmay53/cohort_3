//  check for upper case
function isUpper(char) {
    if (char >= "A" && char <= "Z") return true;
    else return false;
}

function mirrorImage(str) {
    // return false if str is null
    if (str == null) return false;
    // return false if not alphabets
    var letters = /^[A-Za-z]+$/;
    if (!str.match(letters)) {
        return false;
    }
    // creating array of alphabets
    var lowAlphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    var highAlphabets = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    var letters = str.split("");
    for (var i = 0; i < letters.length; i++) {
        // is letter is upper case traverse upper case alphabets
        if (isUpper(letters[i])) {
            for (var j = 0; j < highAlphabets.length; j++)
                if (letters[i] == highAlphabets[j]) {
                    // on finding letter in alphabets, change it to its corresponing mirror alphabet
                    letters[i] = highAlphabets[25 - j];
                    // break to next letter of input string
                    break;
                }
        }
        // is letter is lower case traverse lower case alphabets
        else {
            for (j = 0; j < lowAlphabets.length; j++)
                if (letters[i] == lowAlphabets[j]) {
                    letters[i] = lowAlphabets[25 - j];
                    break;
                }
        }
    }
    return letters.join("");
}

module.exports = {
    mirrorImage
};

var mirror = mirrorImage("AyCzB");
console.log(mirror);
