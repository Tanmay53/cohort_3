function newUser(name, email, password) {
    var input = {
        UserName: name,
        EmailID: email,
        Password: password
    }
    return input
}

console.log(newUser("Rohit", "rht.jaiswl@gmail.com", "rohit-123"))