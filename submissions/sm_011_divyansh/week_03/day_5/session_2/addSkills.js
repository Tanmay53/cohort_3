function addSkill(object, newskill) {
    object["skill"] = newskill;
    console.log(object)
    return object;
}
 addSkill({name:"div"}, "karate");

