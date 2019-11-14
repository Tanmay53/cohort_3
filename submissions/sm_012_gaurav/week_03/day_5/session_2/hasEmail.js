//Funcrion to find index of first occurance of a charater in a string.
function indexOf(str, char) {
    var index = -1;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == char) {
            index = i;
            break;
        }
    }
    return index;
}

//Function to return count of a char in a string.
function countChar(str, char) {
    var cnt = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == char) {
            cnt++;
        }
    }
    return cnt;
}


//Function to split string through a character.
function splitString(str, char) {
    var arr = [];
    var s = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] != char) {
            s += str[i];
        }
        else {
            if (s.length != 0) {
                arr.push(s);
                s = '';
            }
        }
    }
    if (s.length != 0) {
        arr.push(s);
    }
    return arr;
}


//Function to check if tld starts with dot or not.
function tldDot (str) {
    if (str[0] == '.') {
        return true;
    }
    else {
        return false;
    }
}


//Function to check if tld is valid or not.
function tldValid(str) {
    var arr = splitString(str,'.');
    tld = arr[arr.length-1];
    if (tld === 'com' || tld === 'org' || tld === 'net') {
        return true;
    }
    else {
        return false;
    }
}


//Function to check if anything other than character, digit, underscore or hyphen is present or not. If present return false else return true.
function charCheck(str) {
    var allowed = 'abcdefghijklmnopqrstuvwxyz0123456789_.-';
    var flag = true;
    for (var i = 0; i < str.length; i++) {
        if (indexOf(allowed, str[i]) == -1) {
            flag = false;
            break;
        }
    }
    return flag;
}


//Function to check if double dots are present or not in the string.
function doubleDots(str) {
    var flag = false;
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] == '.' && str[i+1] == '.') {
            flag = true;
            break;
        }
    }
    return flag;
}


//Function to check if email is valid or not.
function isValid(email) {
    var flag = true;
    if (indexOf(email, '@') == -1) {
        flag = false;
    }
    else if (email[0] == '@' || email[0] == '.') {
        flag = false;
    }
    else if (countChar(email, '@') != 1) {
        flag = false;
    }
    else {
        var arr = splitString(email, '@');
        var firstPart = arr[0];
        var secondPart = arr[1];
        if (firstPart[firstPart.length - 1] == '.') {
            flag = false;
        }
        if (tldDot(secondPart)) {
            flag = false;
        }
        if (!tldValid(secondPart)) {
            flag = false;
        }
        if (!charCheck(firstPart)) {
            flag = false;
        }
        if (doubleDots(firstPart)) {
            flag = false;
        }
    }
    if (flag) {
        console.log("Email is Valid.");
    }
    else {
        console.log("Email is Invalid.")
    }

}
isValid('masai.school.com');            //Invalid
isValid('masai@.com.my');               //Invalid
isValid('@masai.school.net');           //Invalid
isValid('name@gmail.b');                //Invalid
isValid('name@.org.org');               //Invalid
isValid('.name@masaischool.org');       //Invalid
isValid('masaischool()*@gmail.com');    //Invalid
isValid('name..1234@yahoo.com');        //Invalid
isValid('mysite@masaischool.com');      //Valid
isValid('my.name@masaischool.org');     //Valid
isValid('mysite@masai.school.net');     //Valid