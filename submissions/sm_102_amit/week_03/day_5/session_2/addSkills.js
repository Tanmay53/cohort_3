// function to add/update new skill to an object
function addSkill(userObj, value) {
  if (userObj.skill == undefined) {
    userObj.skill = value;
  } else {
    userObj.skill.push(value);
  }
  return userObj;
}

// input
user = {
  name: "Amit Kumar",
  age: "123",
  job: "programmer",
  skill: ["a", "b", "c"]
};
var value = "d";

// output
console.log(addSkill(user, value));
