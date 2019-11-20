//function which will accept a user object, and a password as arguments
// Check if the users passwrod and the password is matching

function passwordVerify(user, password) {

    return user.password === password;

}

var user = {
    name: "Shivansh Singh",
    password: 'abcd1234',
}

console.log(passwordVerify(user, "abcd1234"));

console.log(passwordVerify(user, 123456));