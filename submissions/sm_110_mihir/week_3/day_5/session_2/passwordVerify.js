function passwordVerify(user,password){
    for(keys in user){
        if(keys=='password'){
            if (password==user[keys])
                return true
        }
    }
    return false
}

var newUser={
    name: 'mihir',
    email: 'mihir2019-masai@masai.co.in',
    password: '$mihir$'
}
console.log(passwordVerify(newUser,'$mihir$'))