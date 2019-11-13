var person = {
    pass : 'secret@123'
}

var password = 'secret@123'


function passwordVerify(obj,password){
    passV=obj.pass

    if(passV===password){
        return true;
    }
    else{
        return false;
    }
}

console.log(passwordVerify(person,password))