// Write a function which will accept a user object, and a skill
// Update/Add the user Skill property with the new value
// If the key value doesnt exist, create a new one

function addSkills(userObj, newSkill) {
 // Updating/Adding the user Skill property with the new value 
 // and If the key value doesnt exist, creating a new one
 userObj.skill = newSkill
 console.log(userObj)
 return userObj
}

var userObj = {
 name: 'Chinmay',
 email: 'chinmay@masai.com',
 password: 'test@234',
 // skill: 'cooking',
}
newSkill = "newSkill1"

// Invoking function
addSkills(userObj, newSkill)

