//function which will accept a user object, and a skill
//Update/Add the user Skill property with the new value
//If the key value doesnt exist, create a new one

function addSkills(object, skill) {
    if (object["Skill"] === undefined) {
        object["Skill"] = []
        object["Skill"].push(skill);
        return object;
    }
    else {
        object["Skill"].push(skill);
        return object;
    }
}

var obj1 = {
    "name": "Shivansh Singh",
    "Skill": ["HTML"]
}
var obj2 = {
    "name": "Shivansh Singh",
}

console.log(addSkills(obj1, "CSS"));
console.log(addSkills(obj2, "CSS"));