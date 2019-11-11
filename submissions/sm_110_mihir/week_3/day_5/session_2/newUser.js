function newUser(name,email,password){
    var newUser={
        name: name,
        email: email,
        password: password
    }
    return newUser
}

var singup=newUser('Mihir Kumar','mihirlaldas@gmail.com','$mihir$')
console.log(singup)