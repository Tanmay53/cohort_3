function buildDictionary() {
    var allowedSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_-."
    var dict = {}

    for(var i = 0; i < allowedSymbols.length; i++) {
        dict[allowedSymbols[i]] = 0
    }
    return dict
}

function emailValidator(email) {
    var dict = buildDictionary()
    var charSeen = 0

    for(var i = 0; i < email.length; i++) {
        // if character is not already present in dictionary
        if (dict[email[i]] == undefined)
            return false

        if (email[i] == '@' || email[i] == '.') {
            if (charSeen <= 1) {
                return false
            }
            charSeen = 0 // reset char seen till now
        }
        // update values for keys
        dict[email[i]] += 1
        charSeen = charSeen + 1
    }    
    // if wrong number of special symbols
    if(dict['@'] != 1 || dict['.'] < 1)
        return false

    // edge case for tld
    if(charSeen < 3)
        return false

    // finally
    return true
}


// main

var email = "mysite@masaischool.com"
var email = "my.name@masaischool.org"
var email = "mysite@masai.school.net"

var email = "masai.school.com"
var email = "masai@.com.my"
var email =  "@masai.school.net"
var email =  "name@gmail.b"
var email =  "name@.org.org"
var email = ".name@masaischool.org"
var email = "masaischool()*@gmail.com"
var email = "name..1234@yahoo.com"




if (emailValidator(email))
    console.log('Valid Email')
else
    console.log('Invalid Email')
