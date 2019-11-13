function createUser(name,email,password){
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    return user
}

console.log(createUser('Dipanshu','writetodipanshu@gmail.com','Sabharwal'))