person={
    name: "oliver",
    age:35,
    isSuperhero:true,
    city: "starling",
    skills:["archery","martialArts"]
}

var newSkill="wrestling";

function addSkills(person,newSkill){
    person.skills[person["skills"].length]=newSkill;
    return person;
}
console.log(addSkills(person,newSkill))