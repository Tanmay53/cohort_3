//Invoking function
console.log(checkValidEmail('sagar.kadu17@gmail.com'))



//check valid email
function checkValidEmail(str) {

    if (checkAtTheRate(str) && checkCharBeforeAtTheRate(str) && checkDotatStart(str) && checkSpecialCharacters(str) && checkDoubleDots(str) && checkMultipleTLD(str) && checkTopLevelDomain(str)) {
        return true;
    } else {
        return false;
    }
}





//check special characters
function checkSpecialCharacters(str) {
    var ele = convertStringToArray(str);
    for (var i = 0; i < ele.length; i++) {
        if (ele[i] == '!' || ele[i] == '#' || ele[i] == '$' || ele[i] == '%' ||
            ele[i] == '^' || ele[i] == '&' || ele[i] == '*' || ele[i] == '(' ||
            ele[i] == ')' || ele[i] == '+' || ele[i] == '=' || ele[i] == '{' ||
            ele[i] == '}' || ele[i] == '[' || ele[i] == ']' || ele[i] == ':' ||
            ele[i] == ';' || ele[i] == '\"' || ele[i] == '\'' || ele[i] == ',' ||
            ele[i] == '<' || ele[i] == '>' || ele[i] == '?' || ele[i] == '/' ||
            ele[i] == '\'') {
            return false;
        }
    };
    return true;
}


//check multiple top level domain
function checkMultipleTLD(str) {

    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var sampleString = '';
        for (var j = i; j <= i + 3; j++) {
            sampleString = sampleString + str[j];
        }
        if (sampleString === '.net' || sampleString === '.com' || sampleString === '.org') {
            count++;
        }
    }
    if (count > 1) {
        return false;
    } else {
        return true;
    }
}


//check top level domain
function checkTopLevelDomain(str) {

    var sampleString = '';
    for (var j = str.length - 4; j < str.length; j++) {
        sampleString = sampleString + str[j];
    }
    if (sampleString === '.net' || sampleString === '.com' || sampleString === '.org') {
        return true;
    } else {
        return false;
    }
}


//check double dots
function checkDoubleDots(str) {

    for (var j = 0; j < str.length; j++) {
        if (str[j] === '.') {
            if (str[j + 1] === '.') {
                return false;
            }
        }
    }
    return true;
}

//check '.' check at start
function checkDotatStart(str) {

    if (str[0] === '.') {
        return false;
    } else {
        return true;
    }
}


//check character before @
function checkCharBeforeAtTheRate(str) {

    var char = 0;
    var arr = convertStringToArray(str);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '@') {
            if (typeof arr[i - 1] === 'undefined') {
                return false;
            }
        }
    }
    return true;
}







//check @ symbol
function checkAtTheRate(str) {
    var count = 0;
    arr = convertStringToArray(str);
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === '@') {
            count++;
        }
    }
    if (count > 1) {
        return false;
    } else if (count === 0) {
        return false;
    } else {
        return true;
    }
}

//convert string to array
function convertStringToArray(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    return arr;
}