function addSkill(obj,value)
{
    if(obj.skill == undefined)
    {
        obj.skill == value
    }
    else{
        obj.skill.push(value)
    }

    return obj
}
var obj={
    name : "Apoorva Krishna",
    email: "apoorva15997@gmail.com",
    password: "Kushal#025",
    skill: ["cricket"]
}
console.log(addSkill(obj,"badminton"))