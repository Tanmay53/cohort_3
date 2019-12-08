function passwordVerify(obj,pswrd){
    if (obj["passwrd"]===pswrd){
        return true;
    }
    return false;
}

obj={
    userName:"jabz",
    passwrd:'something'
}
console.log(passwordVerify(obj,"something"))