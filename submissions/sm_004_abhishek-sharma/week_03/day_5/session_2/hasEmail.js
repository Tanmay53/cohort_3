function validEmail(mail) {
    var check1 = checkSymbol(mail)
    var check2 = validCharacters(mail)
    var check3 = checkTlds(mail)
    return (check1 && check2 && check3)
}

function checkSymbol(str){
    if(str[0] == "@" || str[0] == "." || str[0] == "-" )
        return false
    var count = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] == "." && str[i+1] == ".")
            return false
        if(str[i] == "@"){
            count++
        }
    }
    if(count == 1)
        return true
    else 
        return false
}

function firstElement(str){
    if(str[0] == "@" || str[0] == ".")
        return false
    else
        return true
}

function validCharacters(str){
    var count = 0
    for(var i = 0; i < str.length; i++){
        switch(str[i]){
            case 'a':
            case 'A':
            case 'b':
            case 'B':
            case 'c':
            case 'C':
            case 'd':
            case 'D':
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
            case 'h':
            case 'H':
            case 'i':
            case 'I':
            case 'j':
            case 'J':
            case 'k':
            case 'K':
            case 'l':
            case 'L':
            case 'm':
            case 'M':
            case 'n':
            case 'N':
            case 'o':
            case 'O':
            case 'p':
            case 'P':
            case 'q':
            case 'Q':
            case 'r':
            case 'R':
            case 's':
            case 'S':
            case 't':
            case 'T':
            case 'u':
            case 'U':
            case 'v':
            case 'V':
            case 'w':
            case 'W':
            case 'x':
            case 'X':
            case 'y':
            case 'Y':
            case 'z':
            case 'Z':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '-':
            case '.':
            case '@':
            case '_':continue
            default : count++
        }
    }
    if(count > 0)
        return false
    else 
        return true
}

function checkTlds(mail){
    var len = mail.length , tld = ""
    function getTld(mail){
        for(var i = 0; i < len; i++){
            if(mail[i] == "@"){
                if(mail[i+1] == ".")
                    return false
                for(var j = i+2; j < len; j++){
                    if(mail[j] == "."){
                        for(var k = j; k < len; k++){
                            tld += mail[k]
                        }
                        return tld
                    }
                }
            }
        }
    }
    var tld = getTld(mail)
    if(tld == ".com" ||tld == ".org" ||tld == ".net" ||tld == ".in")
        return true
    else
        return false
}


console.log(validEmail("mysite@masaischool.com")) // true
console.log(validEmail("my.name@school3.org")) // true
console.log(validEmail("mysite@masaischool.net")) // true
console.log(validEmail("masai@.com.my")) // false
console.log(validEmail("@masaischool.org")) // false
console.log(validEmail("name.@gmail.b")) // false
console.log(validEmail("masai.@school.org.org")) // false
console.log(validEmail(".masai.@school3.net")) // false
console.log(validEmail("masaischool()*.org")) // false
console.log(validEmail("name..1234@yahoo.com")) // false
console.log(validEmail("masai.@school.org.com")) // false


