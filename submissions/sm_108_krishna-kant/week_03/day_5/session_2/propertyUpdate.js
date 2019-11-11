// Initializing Object
var user = {
  name: "Krishna Kant Sharma",
  email: "asgaurdnation@gmail.com",
  password: "Cka0xns9an"
};
var field = "PhoneNo";
var value = "15d1515s";

// Update or create fields in object
function updateProperty(obj, key, value) {
  obj[key] = value;
  console.log(`value update new value ${obj[key]}`, obj);
}

//genrating output
updateProperty(user, field, value);
