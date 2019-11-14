function attherate(inEmail) {
    var cnt = 0
    for (i = inEmail.indexOf('@') + 1; i < inEmail.length; i++) {
        if ('@' !== inEmail[i]) {
            cnt = cnt + 0
        }
        else {
            cnt++
        }
    }
    if (inEmail.indexOf('@') == 0) {
        return false
    }
    else if (inEmail.indexOf('@') == -1) {
        return false
    }
    else if (cnt > 0) {
        return false
    }
    else {
        return true
    }
}

function dot1(inEmail) {
    oc = inEmail.indexOf('@')
    if (inEmail.indexOf('.') == 0) {
        return false
    }
    else if (inEmail[oc + 1] === '.') {
        return false
    }
    else {
        return true
    }

}

function validTld(inEmail) {
    dmn = inEmail.substring(inEmail.length - 3)
    if (dmn === 'org' || dmn === 'com' || dmn === 'net') {
        return true
    }
    else {
        return false
    }
}

var ch = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-_@.'
function validch(inEmail) {
    var cnt = 0
    var cntar = []
    for (i = 0; i < inEmail.length; i++) {
        if (ch.indexOf(inEmail[i]) == -1) {
            return false
        }
    }
    return true
}

function dot2(inEmail) {
    for (i = 0; i < inEmail.length; i++) {
        if (inEmail[i] === '.') {
            if (inEmail[i + 1] === '.') {
                return false
            }
        }
    }
    return true
}

//MAIN FUNCTION

function hasEmail(Object) {
    if (attherate(Object) == true && dot1(Object) == true && validTld(Object) == true && validch(Object) == true && dot2(Object) == true) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

//OBJECT
var person = {
    name: "Sidharth",
    email: ['mysite@masaischool.com', 'my.name@masaischool.org', 'masai.school.com', 'masai@.com.my',
        '@masai.school.net', 'name@gmail.b', 'name@.org.org', '.name@masaischool.org', 'masaischool()*@gmail.com',
        'name..1234@yahoo.com']
}

//CALLING FUNCTION
hasEmail(person.email[0])
hasEmail(person.email[1])
hasEmail(person.email[2])
hasEmail(person.email[3])
hasEmail(person.email[4])
hasEmail(person.email[5])
hasEmail(person.email[6])
hasEmail(person.email[7])
hasEmail(person.email[8])
hasEmail(person.email[9])

