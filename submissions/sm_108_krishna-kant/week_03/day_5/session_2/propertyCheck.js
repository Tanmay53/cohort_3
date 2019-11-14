// Object to match
var obj = {
  name: "Krishna Kant Sharma",
  phoneno: "786042235",
  email: "rohansharma.8574@gmail.com"
};

// Enter Property which you want to match
var key = "skill";
function propertyCheck(obj, key_target) {
  for (key in obj) {
    if (key == key_target) {
      return true;
    }
  }
  return false;
}

// generating output
console.log(propertyCheck(obj, key));
