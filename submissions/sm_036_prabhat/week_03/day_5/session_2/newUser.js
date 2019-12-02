function newUser(name, email, password){
    var obj = {
        Name : name,
        Email : email,
        Password : password,
    }
    return obj
}
console.log(newUser("prabhat","prabhat@gmail.com","abc@123"))