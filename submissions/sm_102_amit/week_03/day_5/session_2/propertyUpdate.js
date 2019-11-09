// function to add/update new property to an object
function propertyUpdate(userObj, property, value) {
  for (key in userObj) {
    if (key == property) {
      userObj[property] = value;
    }
  }
  userObj[property] = value;
  return userObj;
}

// input
user = {
  name: "Amit Kumar",
  age: "123",
  job: "programmer"
};
var property = "job";
var value = "Developer";

// output
console.log(propertyUpdate(user, property, value));
