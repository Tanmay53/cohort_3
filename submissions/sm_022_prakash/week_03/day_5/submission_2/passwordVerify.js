function passwordVerify(obj,pwd){
        if(obj.password == pwd){
            return true
        }
        else{
            return false
        }

}

var user = {
    name: "prakash",
    password : "12345"
}
console.log(passwordVerify(user,1235))