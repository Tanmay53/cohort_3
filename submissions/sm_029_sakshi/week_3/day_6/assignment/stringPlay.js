// function to lower the upper case letter present in the string
function toLowerCase(string) {
    var chars_caps  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var chars_lower = "abcdefghijklmnopqrstuvwxyz"
    var upperToLower = {}

    var new_string = ''
    for(var i = 0; i < 26; i++) {
        upperToLower[chars_caps[i]] = chars_lower[i]
    }

    for(var i = 0; i < string.length; i++) {
        if(upperToLower[string[i]] == undefined)
            new_string = new_string + string[i]
        else
            new_string = new_string + upperToLower[string[i]]
    }
    return new_string
}

// use to toggle case of single lower case letter
function toggleCase(char) {
    var chars_caps  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var chars_lower = "abcdefghijklmnopqrstuvwxyz"

    dict = {}
    for(var i = 0; i < 26; i++) {
        dict[chars_lower[i]] = chars_caps[i]
    }

    //console.log(dict)
    return dict[char]
}

// removes spaces from begining, end and middle of a string
function removeSpaces(str) {
    var new_str = ''

    for(var i = 0; i < str.length; i++) {
        if(new_str.length == 0 && str[i] == ' ')
            continue
        if(new_str[new_str.length-1] == ' ' && str[i] == ' ')
            continue

        new_str = new_str + str[i]
    }

    if(new_str[new_str.length-1] == ' ') {
        str = ''
        for(var i = 0; i <= new_str.length - 2; i++)
            str = str + new_str[i]

        return str
    }
    else
        return new_str
}

// splits a given string, proivded a split char
function split(str, char) {
    temp_str = ''
    split_arr = []
    for(var i = 0; i < str.length; i++) {
        if(str[i] == char) {
            split_arr.push(temp_str)
            temp_str = ''
        }
        else{
            temp_str = temp_str + str[i]
        }        
    }
    split_arr.push(temp_str)
    return split_arr
}

function capitalize(str) {
    new_str = toggleCase(str[0])

    for(var i = 1; i < str.length; i++) {
        new_str = new_str + str[i]
    }

    return new_str
}


function snakeCase(string) {
    string = toLowerCase(string)
    string = removeSpaces(string)
    words  = split(string, ' ')
    
    str = words[0]
    for(var i = 1; i < words.length; i++) {
        str = str + "_" + words[i]
    }

    return str
}

function hyphenCase(string) {
    string = toLowerCase(string)
    string = removeSpaces(string)
    words  = split(string, ' ')
    
    str = words[0]
    for(var i = 1; i < words.length; i++) {
        str = str + "-" + words[i]
    }

    return str
}

function camelCase(string) {
    string = toLowerCase(string)
    string = removeSpaces(string)
    words  = split(string, ' ')
    
    str = words[0]
    for(var i = 1; i < words.length; i++) {
        str = str + capitalize(words[i])
    }

    return str
}


var string = "SakshI SinHA"
console.log(snakeCase(string))
console.log(hyphenCase(string))
console.log(camelCase(string))
