function passwordVerify(object, password1) {
    
        if (object.password===password1){
            console.log(true)
        }
        else{
            console.log(false)
        }
}

var person = {
    name: 'masai',
    password: 'i021saqT'
}
passwordVerify(person, 'i021saqT')