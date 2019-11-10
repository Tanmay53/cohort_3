function addSkills(user,value){
    var flag=false
    for(keys in user){
        if(keys=='skill'){
            //update value
            user[keys]=value
            flag=true
        }
    }
    if(flag==false){
        user.skill=value
    }
    return user
}

var newUser={
    name: 'mihir',
    email: 'mihir2019-masai@masai.co.in',
    password: '$mihir$',
}

var update=(addSkills(newUser,'HTML, CSS, JS'))
console.log(update)

