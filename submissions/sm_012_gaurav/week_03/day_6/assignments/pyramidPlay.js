//Function which returns middle pattern.
function middlePattern(length) {
    str = '';   //Variable to store the pattern.
    for (var i = 0; i < length; i++) {
        if (i%2 == 0) {
            str += '0';
        }
        else {
            str += '.'; 
        }
    }
    return str;
}  


//Function to repeat a character as many times as the given limit.
function repeatCharacter(character, limit) {
    str = '';   //Variable to store the string which has repeated character.
    for (var i = 0; i < limit; i++) {
        str += character;
    }
    return str;
}

//Function to print Pyramid.
function pyramid(level) {
    var numChar = 2*level + 1;   //Number of characters at each level i.e. (2*level+1)
    for (var i = 0; i < level; i++) {
        var str = '';
        str += repeatCharacter('.', (level-i));
        str += middlePattern(numChar - 2*(level-i));
        str += repeatCharacter('.', (level-i));
        console.log(str);
    }
}

//Function to print Inverse Pyramid.
function inversePyramid(level) {
    var numChar = 2*level + 1;   //Number of Characters at each level i.e. (2*level+1)
    for (var i = level-1; i >= 0; i--) {
        var str = '';
        str += repeatCharacter('.', (level-i));
        str += middlePattern(numChar - 2*(level-i));
        str += repeatCharacter('.', (level-i));
        console.log(str);
    }
}


//Function to print Rhombus.
function rhombus(level) {
    pyramid(level);
    var numChar = 2*level + 1;   //Number of Characters at each level i.e. (2*level+1)
    for (var i = level-1; i >= 0; i--) {
        var str = '';
        if (i != level-1) {
            str += repeatCharacter('.',(level-i));
            str += middlePattern(numChar - 2*(level-i));
            str += repeatCharacter('.', (level-i));
            console.log(str);
        }
    }
}

