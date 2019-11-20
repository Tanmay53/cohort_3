function passwordVerify(obj, password){
    if(obj.passwrod === password){
        return true
    }
    else
        return false
}

var user = {
    name : "Abhishek",
    email : "abhishek.sharma1597@gmail.com",
    passwrod : "abhi1504"
}

console.log(passwordVerify(user, "abhi1503")) // false
console.log(passwordVerify(user, "abhi1504")) // true
console.log(passwordVerify(user, "Abhi1504")) // false
