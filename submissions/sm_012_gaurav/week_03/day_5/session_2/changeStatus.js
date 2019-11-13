function changeStatus(userObject, status) {
    if (userObject.status === undefined) {
        return "Invalid Input";
    }
    else {
        if (status === 'Basic') {
            userObject.creditLimit = 80000;
        }
        else if (status === 'Premium') {
            userObject.creditLimit = 300000;
        }
        else if (status === 'Platinum') {
            userObject.creditLimit = 600000;
        }
        userObject.status = status;
        return userObject;
    }
}

/* Test Case :- 
   I/P :- {name: 'John', age: 25}, 'Basic'  O/P :- "Invalid Input"
   I/P :- {name: 'John', age: 25, status: 'Basic'}, 'Premium'  O/P :- {name: 'John', age: 25, status: 'Premium', creditLimit: 300000}
*/