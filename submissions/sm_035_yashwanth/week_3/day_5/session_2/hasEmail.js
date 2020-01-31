var email = "masaischool()*@gmail"
// console.log(email)
console.log(emailCheck(email))

function emailCheck(email) {
    if (checkatPresentorNot(email) == false) {
        return "Invalid EmailId"
    }
    else if (checkDotnotinTld(email) == false) {
        return "Invalid EmailId"
    }
    else if (checkStartAt(email) == false) {
        return "Invalid EmailId"
    }
    else if (checkWrdsinTld(email) == false) {
        return "Invalid EmailId"
    }
    else if (repeatCountAfterDot(email) == false) {
        return "Invalid EmailId"
    }
    else if (ifTwoDots(email) == false) {
        return "Invalid EmailId"
    }
    else if (charactersToExist(email) == false) {
        return "Invalid EmailId"
    }
    return "Valid EmailId"
}
// checking wheather @ is there or not in given email
function checkatPresentorNot(email) {
    if (email.indexOf("@") == -1) {
        return false
    }
    return true
}
// checking whether 2dots there or not
function checkDotnotinTld(email) {
    email = email.split("@")
    // console.log(email)
    var tldSrt = email[1]
    if (tldSrt[0] == ".") {
        return false
    }
    return true
}
// checking @ . at first or not
function checkStartAt(email) {
    if (email[0] == "@" || email[0] == ".") {
        return false
    }
}
// checking whether tld ending correct 
function checkWrdsinTld(email) {
    if (email[email.length - 4] + email[email.length - 3] + email[email.length - 2] + email[email.length - 1] == ".com" ||
        email[email.length - 4] + email[email.length - 3] + email[email.length - 2] + email[email.length - 1] == ".org" ||
        email[email.length - 4] + email[email.length - 3] + email[email.length - 2] + email[email.length - 1] == ".net") {
        return true
    }
    return false
}
// checking domain repeating or not 
function repeatCountAfterDot(email) {
    email.split("@")
    var count = 0
    for (var i = 0; i < email.length; i++) {
        if (email[i] == ".") {
            if (email[i + 1] + email[i + 2] + email[i + 3] == "com" ||
                email[i + 1] + email[i + 2] + email[i + 3] == "org" ||
                email[i + 1] + email[i + 2] + email[i + 3] == "net") {
                count++
            }
        }
    }
    if (count > 1) {
        return false
    }
}
// checking whether 2 dots continuously there or not 
function ifTwoDots(email) {
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "." && email[i + 1] == ".") {
            return false
        }
    }
}
// checking lld characters 
function charactersToExist(email) {
    var words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._-1234567890"
    email.split("@")
    var Lld = email[0]
    for (var i = 0; i < Lld; i++) {
        if (words.indexOf(Lld[i]) != -1) {
            return true
        }
    }
}
