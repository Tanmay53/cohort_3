function propertyUpdate(user,key,value){
    var flag=false
    for(keys in user){
        if(keys==key){
            //update value
            user[keys]=value
            flag=true
        }
    }
    if(flag==false){
        user[key]=value
    }
    return user
}

var newUser={
    name: 'mihir',
    email: 'mihir2019-masai@masai.co.in',
    password: '$mihir$'
}

var update=(propertyUpdate(newUser,'name','Mihir Kumar'))
console.log(update)

var update=(propertyUpdate(newUser,'phone','9432367559'))
console.log(update)