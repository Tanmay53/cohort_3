// function which takes name, email and password as arguments
//return an Object of the new user

function newUser(name, email, password) {

    var newUser = {}
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;

    return newUser;

}


console.log(newUser("shivansh", "shivansh@gmail.com", "abcdef"));

