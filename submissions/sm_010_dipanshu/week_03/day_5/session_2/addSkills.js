function update(obj, skillValue){
    if(obj.Skill == undefined){
        obj.Skill = []
        obj.Skill[0] = skillValue
    }
    else{
        obj.Skill.push(skillValue)
    }
    
    return obj
}

sample = {
    name: 'Dipanshu Sabharwal',
    age: 25
}

console.log(update(sample,'skating'))
console.log(update(sample,'swimming'))