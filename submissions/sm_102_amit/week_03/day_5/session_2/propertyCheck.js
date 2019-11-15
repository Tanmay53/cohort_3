// function to check property exist to an object or not
function propertyCheck(userObj, property) {
  for (key in userObj) {
    if (key == property) {
      return true;
    }
  }
  return false;
}
// input
user = {
  name: "Amit Kumar",
  age: "123",
  job: "programmer"
};
var property = "job";

// output
console.log(propertyCheck(user, property));
