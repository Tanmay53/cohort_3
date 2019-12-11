 var person = {
  name: "Soumik",
  skill: "singing"
};
var skill = "dancing";
function changeStatus() {
  if (person.skill == undefined) {
    person.skill = skill;
  } else {
    person.skill = skill;
  }
  return person;
}
console.log(changeStatus(person, skill));
