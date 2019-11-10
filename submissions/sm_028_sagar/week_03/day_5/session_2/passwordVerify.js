var userObject = { //input object
    name: 'xyzuser',
    password: 'abc@123'
}
var inputPassword = 'abc@123' //input password

//Invoking function
var flag = passwordVerify(userObject, inputPassword);
console.log(flag)



//function for password verify
function passwordVerify(object, password) {

    if (password === object.password) {
        return true;
    } else {
        return false;
    }
}


//output
// true