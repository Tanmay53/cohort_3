function emailCheck(address){
    if (address.indexOf('@')===-1){ //check if the email contains '@' or not
        return false;
    }

    if (splitEmailCheck(address)){ //check if the email has more than 1 @'s
        return false;
    }

    if (globalEmail(address)){ //check if the first value is . or @
        return false;
    }

    if (firstPart(address)){ //check in first part if all are valid chars or not
        return false; 
    }

    if (secondPart(address)){
        return false; //check in second part if all are valid chars or not
    }

    if (tld(address)){ //check if tld domains start with .
        return false;
    }

    if (doubleDot(address)){
        return false;
    }

    if (domainName(address)){
        return true; //check domain name of its .com or .net or .org
    }


    return true;
}

function splitEmailCheck(email){
    var splitEmail=email.split('@');
    
    if (splitEmail.length!==2){
        return true;
    }
}

function globalEmail(email){
    if (email[0]=='.' || email[0]=='@'){
        return true;
    }
}

function firstPart(email){
    var splitEmail=email.split('@');

    var allowedChars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9,0,"_","-",'.']
    
    var firstPart=splitEmail[0];

    for (var i=0;i<firstPart.length;i++){
        if (allowedChars.indexOf(firstPart[i])==-1){
            return true;
        }
    }
}

function secondPart(email){
    var splitEmail=email.split('@');

    var allowedChars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',1,2,3,4,5,6,7,8,9,0,"."]
    
    var secondPart=splitEmail[1];

    for (var i=0;i<secondPart.length;i++){
        if (allowedChars.indexOf(secondPart[i])==-1){
            return true;
        }
    }
}

function tld(email){
    var splitEmail=email.split('@');

    if (splitEmail[1][0]=='.'){
        return true;
    }
}

function domainName(email){
    var splitEmail=email.split('@');

    var second=splitEmail[1];

    var domainName=second.split(".");

    var dotcomPart=domainName[domainName.length-1];

    if (dotcomPart=='com' || dotcomPart=='org' || dotcomPart=='net'){
        return true;
    }

}

function doubleDot(email){
    for (var i=0;i<email.length-1;i++){
        if (email[i]=='.' && email[i+1]=='.'){
            return true;
        }
    }
}

console.log(emailCheck('mysite@masai..school.net'))
//mysite@masaischool.com
// my.name@masaischool.org
// mysite@masai.school.net