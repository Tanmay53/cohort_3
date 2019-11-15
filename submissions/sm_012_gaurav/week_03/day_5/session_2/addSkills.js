//Function to update/add skill.
function addSkills(userObject, skill) {
    //Case when key value doesn't exist.
    if (userObject.skill === undefined) {
        userObject.skill = [skill];
    }
    else {
        userObject.skill.push(skill);
    }
    return userObject;
}


/* Test Case :-
   I/P :- {name: "John", age: 25}, 'Swimming'  O/P :- {name: "John", age: 25, skill: ['swimming']}
   I/P :- {name: "John", age: 25, skill: ['Karate']}, 'Swimming'  O/P :- {name: "John", age: 25, skill: ['Karate', 'swimming']}
*/