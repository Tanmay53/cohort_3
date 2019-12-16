function newUser(name , email , password)
{
    var person = {};
    person.name = name;
    person.email = email;
    person.password = password;
    return person;
}
console.log(newUser("Ashish" , "ashish@gmail.com" , "ashish@200"));