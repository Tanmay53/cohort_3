var input = 'sAgaR  KAdu' //string input

//invoke function
// console.log(camelCase(input))
// console.log(snakeCase(input))
// console.log(hypenCase(input))





//function for camelCase
function camelCase(string) {

    var str = '';
    var string = removeSpace(string);
    for (var i = 0; i < string.length; i++) {
        if (string[i] === '*') {
            str = str + upperCase(string[i + 1]);
            i++;
            continue;
        }
        str = str + smallCase(string[i]);
    }
    return str;
}


//function for snake_case
function snakeCase(string) {

    var arr = convertStringToArray(string);
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        if (string[i] === ' ') {
            str = str + '_'
            continue;
        }
        str = str + smallCase(string[i])
    }
    return str;
}


//hypen Case
function hypenCase(string) {

    var str = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            str = str + '-'
            continue;
        }
        str = str + smallCase(string[i])
    }
    return str;
}



//function to upper case
function upperCase(letter) {
    var small = 'abcdefghijklmnopqrstuvwxyz'
    var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    //verify
    if (verifyCapitalLetter(letter)) {
        return letter;
    } else {

        //to convert in capital letter
        for (var i = 0; i < small.length; i++) {
            if (letter === small[i]) {
                return caps[i];
            }
        }
    }
    return null;
}

//function to lower case
function smallCase(letter) {

    var small = 'abcdefghijklmnopqrstuvwxyz'
    var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    //verify
    if (verifySmallLetter(letter)) {
        return letter;
    } else {
        //to convert in small letter
        for (var i = 0; i < caps.length; i++) {
            if (letter === caps[i]) {
                return small[i];
            }
        }
    }

    return null;
}



//to verify small case of letter
function verifySmallLetter(letter) {

    var small = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < small.length; i++) {
        if (letter === small[i]) {
            return true;
        }
    }
    return false;
}

//to verify capital case of letter
function verifyCapitalLetter(letter) {

    var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < caps.length; i++) {
        if (letter === caps[i]) {
            return true;
        }
    }
    return false;
}



var a = ' sagar      kadu';
removeSpace(a);

//remove space and add * instead
function removeSpace(string) {

    var arr = convertStringToArray(string);
    var str = '';
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === ' ') {
            if (arr[i + 1] !== ' ') {
                str = str + upperCase(arr[i + 1]);
                i++;
                continue;
            }
        }
        str = str + arr[i];
    }
    console.log(str)
}

//convert string to array
function convertStringToArray(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    return arr;
}



//function for split array
function split_arr(string) {
    givenChar = ' ';
    var i = 0;
    var temp = [];
    for (var i = 0; i < string.length; i++) {
        temp.push(string[i]);
    }
    // console.log(temp);

    var tempString = '';
    var arr = [];
    for (var i = 0; i < temp.length; i++) {

        if (temp[i] === givenChar) {
            // console.log(givenChar)
            arr.push(tempString);
            tempString = '';
            continue;
        }

        tempString = tempString + temp[i];
    }
    arr.push(tempString);
    return arr;
}