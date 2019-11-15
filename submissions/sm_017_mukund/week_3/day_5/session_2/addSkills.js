var person  = {
    skills : ['c++','html']
}

function addSkills(obj,skill){
    allSkills=obj.skills
    if(allSkills.indexOf(skill) == -1){
        allSkills.push(skill)
    }

    return obj;
}

console.log(addSkills(person,'css'))