function user(name,email,password){

var newuser ={
    name: name,
    email:email,
    password:password,
}
return newuser;
}
// function user(name,email,password){
//     var obj={};
//     obj.name=name,
//     obj.email=email,
//     obj.password=password

//     return obj;
// }
console.log(user("brijesh","brij@gmail.com","12345"))