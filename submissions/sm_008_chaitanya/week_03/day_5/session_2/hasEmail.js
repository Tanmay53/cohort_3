function hasEmail(email) {

    if (emailLength(email) === false) {
        return "Invalid Email !"
    }

    else if (atNotPresent(email) === false) {
        return "Invalid Email !"
    }

    else if (topLevelStartdot(email) === false) {
        return "Invalid Email !"
    }

    else if (atFirstAtLast(email) === false) {
        return "Invalid Email !"
    }

    else if (invalidDomains(email) === false) {
        return "Invalid Email !"
    }

    else if (doubleDots(email) === false) {
        return "Invalid Email !"
    }

    else if (allowedChar(email) === false) {
        return "Invalid Email !"
    }

    return "valid Email"
}

function emailLength(address) {             // The email must contains exactly two parts after splitting at "@"
    var seperate = address.split('@')
    if (seperate.length !== 2) {
        return false
    }
    return true
}

function atNotPresent(address) {            // The email address must contain @
    if (address.indexOf("@") === -1) {
        return false
    }
    return true
}

function topLevelStartdot(address) {        // Top level domain should not start with dot(.)
    var str = address.split("@")
    var tld = str[1]
    if (tld[0] === ".") {
        return false
    }
    return true
}

function atFirstAtLast(address) {           // An email should not start and end with @ and dot(.)          
    if (address[0] === "@" || address[0] === "." || address[address.length - 1] === "@" || address[address.length - 1] === ".") {
        return false
    }
    return true
}

function invalidDomains(address) {          // An email must contain the valid domain name 
    var str = address.split("@")
    var domain = str[1]
    var str2 = domain.split(".")
    var last = str2[str2.length - 1]
    var valid_domain = ['com', 'net', 'org']
    for (var i = 0; i < last.length; i++) {
        if (valid_domain.indexOf(last) === -1) {
            return false
        }
    }
    return true
}

function doubleDots(address) {          // doubledots(..) are not allowed in an email address
    for (var i = 0; i < address.length; i++) {
        if (address[i] === "." && address[i + 1] === ".") {
            return false
        }
    }
    return true
}

function allowedChar(address) {         // only allowed chars of an email address
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.'
    var arr = chars.split('');
    var divide = address.split("@")
    var prefix = divide[0]
    for (var i = 0; i < prefix.length; i++) {
        if (arr.indexOf(prefix[i]) === -1) {
            return false
        }
    }
    return true
}

var email = 'masai123@@gmail.com'
console.log(hasEmail(email))


