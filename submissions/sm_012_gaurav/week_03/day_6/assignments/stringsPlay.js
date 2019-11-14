//Function to find index of first occurance of a Character in a string.
function indexOf(input, character) {
    var index = -1;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == character) {
            index = i;
            break;
        }
    }
    return index;
}


//Function to convert string into lower case.
function lowerCase(input) {
    capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    var lowerCaseString = '';
    for (var i = 0; i < input.length; i++) {
        var indexInCapital = indexOf(capitalLetters, input[i]);
        if (indexInCapital != -1) {
            lowerCaseString += smallLetters[indexInCapital];
        }
        else {
            lowerCaseString += input[i];
        }
    }
    return lowerCaseString;
}

//Function to split a string on given character.
function splitString(input, character) {
    var arr = [];
    var str = '';
    for (var i = 0; i < input.length; i++) {
        if (input[i] != character) {
            str += input[i];
        }
        else {
            if (str.length != 0)
                arr.push(str)
            str = '';
        }
    }
    if (str.length != 0)
        arr.push(str);
    return arr;
}

//Function to capitalize the string.
function capitalizeString(input) {
    capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    var capitalizedString = '';
    if (indexOf(smallLetters, input[0]) != -1) {
        capitalizedString += capitalLetters[indexOf(smallLetters, input[0])];
    }
    else {
        capitalizedString += input[0];
    }
    for (var i = 1; i < input.length; i++) {
        var indexInCapital = indexOf(capitalLetters, input[i]);
        if (indexInCapital != -1) {
            capitalizedString += smallLetters[indexInCapital];
        }
        else {
            capitalizedString += input[i];
        }
    }
    return capitalizedString;
}


//Function to join array of string through a character and return a string.
function joinArray(input, character) {
    var str = '';
    for (var i = 0; i < input.length; i++) {
        if (i != input.length-1) {
            str += (input[i]+character);
        }
        else {
            str += input[i];
        }
    }
    return str;
}

//Function to convert string into camelcase.
function camelCase(input) {
    input = splitString(input, ' ');
    for (var i = 0; i < input.length; i++) {
        if (i == 0) {
            input[i] = lowerCase(input[i]);
        }
        else {
            input[i] = capitalizeString(input[i]);
        }
    }
    return joinArray(input, '');
}

//Function to convert string into snakecase.
function snakeCase(input) {
    input = splitString(input, ' ');
    for (var i = 0; i < input.length; i++) {
        input[i] = lowerCase(input[i]);
    }
    return joinArray(input, '_');
}

//Function to convert string into hyphencase.
function hyphenCase(input) {
    input = splitString(input, ' ');
    for (var i = 0; i < input.length; i++) {
        input[i] = lowerCase(input[i]);
    }
    return joinArray(input, '-');
}

console.log(camelCase('Hello Masai SCHOOL'));    //helloMasaiSchool
console.log(snakeCase('Hello Masai SCHOOL'));    //hello_masai_school
console.log(hyphenCase('Hello Masai SCHOOL'));   //hello-masai-school