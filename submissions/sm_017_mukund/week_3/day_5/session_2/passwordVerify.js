var person = {
    password : 'secret@123'
}

var pass = 'secret@1234'


function passwordVerify(user,p){
    verifyPass = user.password

    if( verifyPass === p ){

        return true;

    }
    else{

        return false;
    
    }
}

console.log(passwordVerify(person,pass))