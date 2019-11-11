var userObject = { //input object
    name: 'sagar'
}
var skill = 'martial arts'

//Invoking function
var updatedObject = addSkills(userObject, skill)
console.log(updatedObject)


//function for adding skills
function addSkills(object, skill) {

    userObject['skill'] = skill;
    return userObject;
}


//output:
//{ name: 'sagar', skill: 'martial arts' }