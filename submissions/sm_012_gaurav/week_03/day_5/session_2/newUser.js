//Function to return an object with given properties.
function newUser (name, email, password) {
    user = {
        name: name,
        email: email,
        password: password
    };
    return user;
}



/* Test Case :- 
   I/P :- "John", "john@gmail.com", "enigma"  O/P :- {name: "John", email: "john@gmail.com", password: "enigma"}
*/ 