function addSkills(obj, updateskill) {
    obj["skill"] = updateskill;
    return obj;
}
var user = addSkills({ name: 'chathan', age: 25, gender: 'male', skill: 'teaching' }, 'coding');
console.log(user)