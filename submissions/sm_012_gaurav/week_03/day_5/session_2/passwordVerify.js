//Function to varify password.
function verifyPassword(userObject, password) {
    if (userObject.password === password) {
        return true;
    }
    else {
        return false;
    }
}

/* Test Case :- 
   I/P :- {password: "enigma"},"enigma"  O/P :- true
*/