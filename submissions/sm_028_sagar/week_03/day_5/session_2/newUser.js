var name = 'sagar' // input name
var email = 'sagarkadu17@gmail.com' // input email
var password = '34%1ksa' // input password

//invoking function
console.log("Object: ", newUser(name, email, password));




//function for object creation
function newUser(name, email, password) {
    var newUser = {};
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;

    return newUser;
}