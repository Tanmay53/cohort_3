//Invoking function
console.log(propertyCheck('sagarkadu17@gmail.com'));


//function for property check
function propertyCheck(str) {

    if (checkSpecialCharacters(str) && checkDoubleDots(str) && checkDotatStart(str) && checkCharBeforeAtTheRate(str) && checkAtTheRate(str)) {
        return true;
    } else {
        return false;
    }
};


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

//convert string to array
function convertStringToArray(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    return arr;
}



//input -----------------> output
//sagar.kadu17@gmail.com ----> true
//sagar!.kadu17@gmail.com ----> false
//sagar@.kadu17@gmail.com -----> false