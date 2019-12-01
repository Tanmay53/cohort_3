//alert('works')
var validChars = {}
function buildValidCharDict() {
    str = "abcdefghijklmnopqrstuvwxyz "
    for(let i = 0; i < str.length; i++) {
        validChars[str[i]] = true
        validChars[str[i].toUpperCase()] = true
    }

    //alert(validateName('rohit'))
}

function buildDictionary() {
    var allowedSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_-."
    var dict = {}

    for(var i = 0; i < allowedSymbols.length; i++) {
        dict[allowedSymbols[i]] = 0
    }
    return dict
}



function validateName(name) {
    if(name.length == 0)
        return false

    for(let i = 0; i < name.length; i++) {
        if(validChars[name[i]] == undefined)
            return false
    }

    return true
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



