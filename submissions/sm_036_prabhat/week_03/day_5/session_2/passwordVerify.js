function passwordVerify (obj, val){
    if(obj["Pass"] === val){
        return true;
    }
    else{
        return false;
    }
}
var obj = {
    Name : "Prabhat",
    Email : "qwerty@123",
    Pass : 12345,
}

console.log(passwordVerify(obj,12345))