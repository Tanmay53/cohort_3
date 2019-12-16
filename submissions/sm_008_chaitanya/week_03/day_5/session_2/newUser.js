function createuser(name,email,password){
    newUser={}
    newUser.name=name
    newUser.email=email
    newUser.password=password

    return newUser
}
var name='chathan'
var email='chathan2569@gmail.com'
var pwd='masai123'
console.log(createuser(name,email,pwd))