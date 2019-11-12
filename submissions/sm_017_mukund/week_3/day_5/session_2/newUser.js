var name='Dino'
var email='dino.19@gmail.com'
var pass='dino@19'


function user(name,email,password){
    var obj={};
    obj.name=name
    obj.email=email
    obj.password=password

    return obj;
}


console.log(user(name,email,pass))          // function call