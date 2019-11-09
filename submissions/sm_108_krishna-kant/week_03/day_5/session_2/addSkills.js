// Initializing Object
var user = {
  name: "Krishna Kant Sharma",
  email: "asgaurdnation@gmail.com",
  password: "Cka0xns9an"
};
var skill = "Racer";

// Update or create fields in object
function updateProperty(obj, skill) {
  if (user.skill == undefined) {
    user.skill = [];
  }
  user.skill[user.skill.length] = skill;

  console.log(user);
}

//genrating output
updateProperty(user, skill);
