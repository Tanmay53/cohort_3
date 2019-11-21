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
console.log(checkTlds("abhishek.sharma1597@gmail.com"))